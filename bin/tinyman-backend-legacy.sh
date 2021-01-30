#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

node /home/pi/sync/repos/tinyman/server/index.js
exit


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
      HNAME=$(curl -s "http://${PARAM['ip']}:8008/setup/eureka_info?options=detail" | jq '.name' | tr -d '"')
      INFO=$(catt -d ${PARAM['ip']} info)
      STATUS=$(catt -d ${PARAM['ip']} status)
      echo -e "name: ${HNAME}\n${INFO}\n${STATUS}" | jc --airport 2>/dev/null
    fi
    [[ "${PARAM['action']}" == "mute" ]] && catt -d ${PARAM['ip']} volume 0
    [[ "${PARAM['action']}" == "set-volume" ]] && catt -d ${PARAM['ip']} volume ${PARAM['volume']}
    [[ "${PARAM['action']}" == "unmute" ]] && catt -d ${PARAM['ip']} volume 100
    
    [[ "${PARAM['action']}" == "play" ]] && catt -d ${PARAM['ip']} play
    [[ "${PARAM['action']}" == "pause" ]] && catt -d ${PARAM['ip']} pause
    [[ "${PARAM['action']}" == "stop" ]] && catt -d ${PARAM['ip']} stop

    [[ "${PARAM['action']}" == "rewind" ]] && catt -d ${PARAM['ip']} rewind 30

    [[ "${PARAM['action']}" == "cast" ]] && catt -d ${PARAM['ip']} cast "https://www.youtube.com/watch?v=8G7hZXceT2E"
    ;;
  sonoff)
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: application/json'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    curl -s "http://${PARAM['ip']}/cm?cmnd=${PARAM['action']}"
    ;;
  *)
    echo -n "Unknown command: $COMMAND"
    ;;
esac
