var sound = require('./sound.js'),
    animator = require('./animator.js'),
    gpio = require('./gpio.js'),
    fs = require('fs');

var songIndex = 0;
var songs = JSON.parse( fs.readFileSync('./music/db.json', 'utf-8') );


request_animation();

setInterval(function(){
    next_animation();
}, 20000);
sound.onEnd(next_animation);

function next_animation(){
    songIndex++;
    if (songIndex==songs.length) songIndex=0;
    request_animation();
}

function request_animation(){
    sound.playSound( './music/' + songs[songIndex].song, function(){ 
        // animator.newFile( './music/' + songs[songIndex].data, Date.now(), function(event){
        //     console.log(event);
        //     if(event.servo0 != undefined) gpio.move_servo(0, event.servo0);
        //     if(event.servo1 != undefined) gpio.move_servo(1, event.servo1);
        //     if(event.servo2 != undefined) gpio.move_servo(2, event.servo2);
        // });
    });
}

