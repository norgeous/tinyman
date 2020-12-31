#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

[ ! -z "$1" ] && echo starting socat && socat tcp-l:9009,crlf,reuseaddr,fork SYSTEM:${BASH_SOURCE[0]}

read REQ
REQ_URL=$(echo $REQ | cut -f2 -d' ')
COMMAND=$(echo ${REQ_URL#?} | cut -f1 -d'?')
QUERY_STRING=$(echo ${REQ_URL#?} | cut -f2 -d'?')
saveIFS=$IFS; IFS='=&'; parm=($QUERY_STRING); IFS=$saveIFS
declare -A PARAM; for ((i=0; i<${#parm[@]}; i+=2)); do PARAM[${parm[i]}]=${parm[i+1]}; done

case $COMMAND in
  '')
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: text/plain'
    echo 'Connection: close'
    echo
    echo 'tinyman-backend'
    ;;
  list)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: application/json'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    echo '['
    echo '"list",'
    echo '"reboot",'
    echo '"poweroff",'
    echo '"sysinfo",'
    echo '"chromecast"'
    echo ']'
    ;;
  reboot)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: text/html'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    echo -n 'Rebooting...'
    reboot
    ;;
  poweroff)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: text/html'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    echo -n 'Powering off...'
    poweroff
    ;;
  sysinfo)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: application/json'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    sysinfo -ej
    ;;
  chromecast)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: application/json'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    if [[ "${PARAM['action']}" == "status" ]]; then
      HNAME=${curl "http://${PARAM['ip']}:8008/setup/eureka_info?options=detail" | jq '.name'}
      INFO=$(catt -d ${PARAM['ip']} info)
      STATUS=$(catt -d ${PARAM['ip']} status)
      echo -e "name: ${INFO}\n${INFO}\n${STATUS}" | jc --airport | jq --sort-keys
    fi
    [[ "${PARAM['action']}" == "mute" ]] && catt -d ${PARAM['ip']} mute
    [[ "${PARAM['action']}" == "unmute" ]] && catt -d ${PARAM['ip']} unmute
    
    [[ "${PARAM['action']}" == "play" ]] && catt -d ${PARAM['ip']} play
    [[ "${PARAM['action']}" == "pause" ]] && catt -d ${PARAM['ip']} pause
    [[ "${PARAM['action']}" == "stop" ]] && catt -d ${PARAM['ip']} stop

    [[ "${PARAM['action']}" == "mungo" ]] && catt -d ${PARAM['ip']} cast "https://www.youtube.com/watch?v=8G7hZXceT2E"
    ;;
  *)
    echo -n "Unknown command: $COMMAND"
    ;;
esac
