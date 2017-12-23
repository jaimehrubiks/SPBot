var omx = require('omxdirector');

// omx.setVideoDir('/home/pi/files/');
var playing, file, cbb, onEnd;

omx.on('play', function(files, options){
    if ( playing == false){
        playing = true;
        setTimeout(function(){
            omx.play();
        },2000);
    }else {
        console.log('Playing File: ', file);
        cbb();
    }
});
omx.on('stop', function(files, options){
    if(onEnd) onEnd();
});
omx.voldown();

function endEvent(end){
    onEnd = end;
}

function playSound(fileName, cb){
    file = fileName;
    cbb = cb;
    if (omx.isLoaded()){
        omx.stop();
        setTimeout(function(){ play();}, 2000);
    }
    else{
        play();
    }
    function play(){
        playing = false;
        omx.play(fileName, {audioOutput: 'local'});
        omx.pause();
    }
}

function stopSound(){
    if(omx.isLoaded()){
        omx.stop();
    }
}

module.exports = {};
module.exports.playSound = playSound;
module.exports.endEvent = endEvent;

