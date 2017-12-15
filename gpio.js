// Test 1
// console.log('Running OsierYisus.js Daemon...');
const Gpio = require('pigpio').Gpio;

/* GPIO CONFIGURATION */ 

// Servo_Configuration
servo = [{}, {}, {}];
servo[0].io = new Gpio(2, {mode: Gpio.OUTPUT}),
servo[1].io = new Gpio(3, {mode: Gpio.OUTPUT}),
servo[2].io = new Gpio(4, {mode: Gpio.OUTPUT}),
servo_minPulse = 850;
servo_maxPulse = 2500;

// Leds_Configuracion

/* FUNCTIONS */
function move_servo(servo_n, range){
    if (range == -1) servo[servo_n].io.servoWrite(0);
    else if (range<0 || range>1) { console.log('Err. Servo range goes from 0 to 1'); return -1; }
    range = servo_minPulse + range*(servo_maxPulse-servo_minPulse);
    servo[servo_n].io.servoWrite(range);
}

/* Node Module */
module.exports={};
module.exports.move_servo = move_servo;
