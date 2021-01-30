#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

node server/index.js
# /usr/local/bin/yarn server # nodemon mode
exit
