var sound = require('./sound.js'),
    animator = require('./animator.js'),
    gpio = require('./gpio.js');


function request_animation(song){
    sound.playSound(song_test + '.wav', function(){ 
        console.log( 'Playing sound: ' + song);
        animator.newFile(song_test + '.json', Date.now(), function(event){
            console.log(event);
            if(event.servo0 != undefined) gpio.move_servo(0, event.servo0);
            if(event.servo1 != undefined) gpio.move_servo(1, event.servo1);
            if(event.servo2 != undefined) gpio.move_servo(2, event.servo2);
        });
    });
}

/* Testing */
//  gsjson "1kZFcW__4xkK7usIgqS7lYppz9_Orxn1FJro-L5x_xhw" > yetuyetu.json
// sudo pkill dbus-daemon
// sudo pkill omxplayer
// sudo node script
var song_test =  'yetuyetu';
request_animation(song_test);
