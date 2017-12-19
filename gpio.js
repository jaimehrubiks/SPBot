// Test 1
// console.log('Running OsierYisus.js Daemon...');
const Gpio = require('pigpio').Gpio;

/* GPIO CONFIGURATION */ 

// Servo_Configuration
var servo = [{
    io: new Gpio(2, {mode: Gpio.OUTPUT}), minPulse: 1200, maxPulse: 2000}, {							// 0: Cuerpo (850-2500)
    io: new Gpio(3, {mode: Gpio.OUTPUT}), minPulse: 750,  maxPulse: 2450}, {							// 1: Brazo derecho (750-2450)
    io: new Gpio(4, {mode: Gpio.OUTPUT}), minPulse: 750,  maxPulse: 2200 , invert: true} // 2: Brazo izquierdo (750-2450)
];

// Leds_Configuracion

/* FUNCTIONS */
function move_servo(servo_n, range){
    if (range == -1) servo[servo_n].io.servoWrite(0);
    else if (range<0 || range>1) { console.log('Err. Servo range goes from 0 to 1'); return; }
    if(servo[servo_n].invert) range = 1-range;
    range = Math.round( servo[servo_n].minPulse + range*(servo[servo_n].maxPulse-servo[servo_n].minPulse) );
    servo[servo_n].io.servoWrite(range);
}

/* Node Module */
module.exports={};
module.exports.move_servo = move_servo;
