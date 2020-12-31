#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

echo "install deps..."
[ ! -x "$(command -v git)" ] && echo "installing git..." && apt install -y git
[ ! -x "$(command -v iostat)" ] && echo "installing sysstat/iostat..." && apt install -y sysstat
[ ! -x "$(command -v dig)" ] && echo "installing dnsutils/dig..." && apt install -y dnsutils
[ ! -x "$(command -v hdparm)" ] && echo "installing sysstat/hdparm..." && apt install -y hdparm
[ ! -x "$(command -v socat)" ] && echo "installing socat..." && apt install -y socat
echo

echo "remove old tinyman..."
[ -L "/usr/bin/sysinfo" ] && rm "/usr/bin/sysinfo"
[ -L "/usr/bin/pi-model" ] && rm "/usr/bin/pi-model"
[ -d "/opt/tinyman" ] && rm -r "/opt/tinyman"
systemctl stop tinyman-backend
systemctl disable tinyman-backend
systemctl stop tinyman-frontend
systemctl disable tinyman-frontend
echo

echo "clone tinyman repo..."
cd /opt
git clone https://github.com/norgeous/tinyman.git
echo

echo "install tinyman commands (pi-model, sysinfo)..."
chmod a+x "/opt/tinyman/bin/command/sysinfo.sh"
chmod a+x "/opt/tinyman/bin/command/pi-model.sh"
ln -s "/opt/tinyman/bin/command/sysinfo.sh" "/usr/bin/sysinfo"
ln -s "/opt/tinyman/bin/command/pi-model.sh" "/usr/bin/pi-model"
echo

echo "install tinyman backend server..."
chmod a+x "/opt/tinyman/bin/tinyman-backend.sh"
cp "/opt/tinyman/bin/service/tinyman-backend.service" "/etc/systemd/system/tinyman-backend.service"
systemctl enable tinyman-backend
systemctl start tinyman-backend
echo

echo "install tinyman frontend server..."
chmod a+x "/opt/tinyman/bin/tinyman-frontend.sh"
cp "/opt/tinyman/bin/service/tinyman-frontend.service" "/etc/systemd/system/tinyman-frontend.service"
systemctl enable tinyman-frontend
systemctl start tinyman-frontend
echo

echo "install chromecast cli tool"
pip3 install catt
pip3 install jc
apt install jq
echo

echo "done. installed tinyman!"
echo
