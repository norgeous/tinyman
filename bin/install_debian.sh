#!/bin/bash
[[ $EUID -ne 0 ]] && echo "You must be running as user root." && exit 1

echo "install deps..."
[ ! -x "$(command -v git)" ] && echo "installing git..." && apt install -y git
[ ! -x "$(command -v iostat)" ] && echo "installing sysstat/iostat..." && apt install -y sysstat
[ ! -x "$(command -v dig)" ] && echo "installing dnsutils/dig..." && apt install -y dnsutils
[ ! -x "$(command -v hdparm)" ] && echo "installing sysstat/hdparm..." && apt install -y hdparm
[ ! -x "$(command -v socat)" ] && echo "installing socat..." && apt install -y socat
[ ! -x "$(command -v nmap)" ] && echo "installing nmap..." && apt install -y nmap
echo

echo "remove old tinyman..."
[ -L "/usr/bin/sysinfo" ] && rm "/usr/bin/sysinfo"
[ -L "/usr/bin/pi-model" ] && rm "/usr/bin/pi-model"
[ -d "/opt/tinyman" ] && rm -r "/opt/tinyman"
systemctl stop tinyman
systemctl disable tinyman
rm "/etc/systemd/system/tinyman.service"
echo

echo "clone tinyman repo..."
cd "/opt"
rm -rf "/opt/tinyman"
git clone https://github.com/norgeous/tinyman.git
cd "/opt/tinyman"
npm install
echo

echo "install tinyman commands (pi-model, sysinfo)..."
chmod a+x "/opt/tinyman/bin/command/sysinfo.sh"
chmod a+x "/opt/tinyman/bin/command/pi-model.sh"
ln -s "/opt/tinyman/bin/command/sysinfo.sh" "/usr/bin/sysinfo"
ln -s "/opt/tinyman/bin/command/pi-model.sh" "/usr/bin/pi-model"
echo

echo "install tinyman server..."
chmod a+x "/opt/tinyman/bin/tinyman.sh"
cp "/opt/tinyman/bin/tinyman.service" "/etc/systemd/system/tinyman.service"
systemctl enable tinyman
systemctl start tinyman
systemctl daemon-reload
echo


echo "done. installed tinyman!"
echo
