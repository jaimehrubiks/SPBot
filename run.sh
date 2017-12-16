#! /bin/bash
if [ "$#" -ne 1 ]; then
    gsjson "1kZFcW__4xkK7usIgqS7lYppz9_Orxn1FJro-L5x_xhw" > yetuyetu.json
fi
sudo pkill dbus-daemon
sudo pkill omxplayer
sudo node script
