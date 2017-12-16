var fs = require('fs');
var NanoTimer = require('nanotimer');

var timer = new NanoTimer();

var events,    // Lista de eventos
    index,     // Evento Actual
    cb;        // Reporte de nuevo evento

var start_time;

function newFile(fileName, startTime, cbReportEvent){
    if (timer.hasTimeout()) timer.clearTimeout();

    fs.readFile(fileName, 'utf-8', function(err, data){
        if(err) { console.log('Error reading File'); return; }
        events = JSON.parse(data);
        index = 0;
        start_time = startTime;
        cb = cbReportEvent;
        let next_event_time = (start_time + events[index].timestamp*1000) - Date.now();
        timer.setTimeout(newEvent, null, next_event_time+'m');
    });
}

function newEvent(){
    cb(events[index]);
    if(index < events.length-1){
        let next_event_time = (start_time + events[index+1].timestamp*1000) - Date.now();
        timer.setTimeout(newEvent, null, next_event_time+'m');
        index++;
    }
}

module.exports = {};
module.exports.newFile = newFile;

// newFile('./output.json', Date.now(), function(data){console.log(data);});
