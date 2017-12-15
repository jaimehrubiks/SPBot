var sound = require('./sound.js');

sound.playSound('yetuyetu.wav', function(){ 
    console.log( 'playinga');
    // setTimeout(function(){
    //     console.log('stopping and playinh');
    //     sound.playSound('yetuyetu.wav', function(){});
    // },25000);
});


