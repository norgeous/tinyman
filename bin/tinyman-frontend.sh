#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

cd /opt/tinyman/build
PYTHONMAJORVERSION=$(python --version 2>&1 | cut -d' ' -f2 | cut -d'.' -f1)
case "$PYTHONMAJORVERSION" in
  2)
    python -m SimpleHTTPServer
    ;;
    
  3)
    python -m http.server 8000
    ;;
esac
