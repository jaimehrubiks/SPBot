var omx = require('omxdirector');

omx.setVideoDir('/home/pi/files/');
var playing = true;

function playSound(fileName, cb){
    if (omx.isLoaded()){
        omx.stop();
        omx.on('stop', function(){
            play();
        });
    }
    else{
        play();
    }
    function play(){
        console.log('function play'+ fileName);
        playing = true;
        omx.once('play', function(files, options){ cb(); });
        omx.play(fileName, {audioOutput: 'local'});
    }
}

function stopSound(){
    if(omx.isLoaded()){
        omx.stop();
    }
}

module.exports = {};
module.exports.playSound = playSound;

