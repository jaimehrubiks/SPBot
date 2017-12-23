#! /bin/bash
if [ "$#" -ne 1 ]; then
    ./help.txt
fi
sudo pkill dbus-daemon
sudo pkill omxplayer
sudo node script
