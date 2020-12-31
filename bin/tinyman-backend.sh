#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

[ ! -z "$1" ] && echo starting socat && socat tcp-l:9009,crlf,reuseaddr,fork SYSTEM:${BASH_SOURCE[0]}

read REQ
REQ_URL=$(echo $REQ | cut -f2 -d' ')
COMMAND=$(echo ${REQ_URL#?} | cut -f1 -d'?')
QUERY_STRING=$(echo ${REQ_URL#?} | cut -f2 -d'?')
# declare -A PARAM; for i in "${QUERY_STRING[@]}"; do IFS="=" ; set -- $i; PARAM[$1]=$2; done

saveIFS=$IFS; IFS='=&'; parm=($QUERY_STRING); IFS=$saveIFS
declare -A PARAM; for ((i=0; i<${#parm[@]}; i+=2)); do PARAM[${parm[i]}]=${parm[i+1]}; done

case $COMMAND in
  '')
    echo 'HTTP/1.1 200 OK'
    echo 'Content-Type: text/html'
    echo 'Connection: close'
    echo
    echo '<html>'
    echo '<head>'
    echo '<title>'
    hostname
    echo '</title>'
    echo '<meta name="viewport" content="width=device-width, initial-scale=1" />'
    echo '<style>'
    echo 'body{text-align:center; font-family:arial; font-size:35px; background:#000; color:#fff;}'
    echo 'a:not(:last-child){display:block; background:#f0f; padding:10px; margin:10px; text-decoration:none; color:#0ff;}</style>'
    echo '</style>'
    echo '</head>'
    echo '<body>'
    hostname
    echo '<a href="/reboot">reboot</a>'
    echo '<a href="/poweroff">poweroff</a>'
    echo '<a href="/sysinfo">sysinfo</a>'
    echo '<a href="/list">list</a>'
    echo '</body>'
    echo '</html>'
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
    echo chromecast result:
    echo "doing action: ${PARAM['action']}, on IP: ${PARAM['ip']}"
    [[ "${PARAM['action']}" == "info" ]]    && curl "http://${PARAM['ip']}:8008/setup/eureka_info?options=detail"
    [[ "${PARAM['action']}" == "status" ]]  && chromecast --host ${PARAM['ip']} status
    [[ "${PARAM['action']}" == "mute" ]]    && chromecast --host ${PARAM['ip']} mute
    [[ "${PARAM['action']}" == "unmute" ]]  && chromecast --host ${PARAM['ip']} unmute
    [[ "${PARAM['action']}" == "pause" ]]   && chromecast --host ${PARAM['ip']} pause
    [[ "${PARAM['action']}" == "unpause" ]] && chromecast --host ${PARAM['ip']} unpause
    [[ "${PARAM['action']}" == "stop" ]]    && chromecast --host ${PARAM['ip']} stop
    echo :end
    ;;
  *)
    echo -n "Unknown command: $COMMAND"
    ;;
esac
