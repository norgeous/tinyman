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
    echo 'Content-Type: text/plain'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    [[ "${PARAM['action']}" == "info" ]]    && curl "http://${PARAM['ip']}:8008/setup/eureka_info?options=detail"
    [[ "${PARAM['action']}" == "status" ]]  && chromecast --host ${PARAM['ip']} status
    [[ "${PARAM['action']}" == "mute" ]]    && chromecast --host ${PARAM['ip']} mute
    [[ "${PARAM['action']}" == "unmute" ]]  && chromecast --host ${PARAM['ip']} unmute
    [[ "${PARAM['action']}" == "pause" ]]   && chromecast --host ${PARAM['ip']} pause && echo 'paused'
    [[ "${PARAM['action']}" == "unpause" ]] && chromecast --host ${PARAM['ip']} unpause && echo 'unpaused'
    [[ "${PARAM['action']}" == "stop" ]]    && chromecast --host ${PARAM['ip']} stop
    ;;
  *)
    echo -n "Unknown command: $COMMAND"
    ;;
esac
