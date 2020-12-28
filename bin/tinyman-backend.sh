#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

[ ! -z "$1" ] && echo starting socat && socat tcp-l:9009,crlf,reuseaddr,fork SYSTEM:${BASH_SOURCE[0]}
read REQ
REQ_URL=$(echo $REQ | cut -f2 -d' ')
COMMAND="${REQ_URL#?}"
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
    echo 'Content-Type: application/json'
    echo 'Access-Control-Allow-Origin: *'
    echo 'Connection: close'
    echo
    echo $REQ
    curl http://192.168.0.243:8008/setup/eureka_info?options=detail
    ;;
  *)
    echo -n "Unknown command: $COMMAND"
    ;;
esac

