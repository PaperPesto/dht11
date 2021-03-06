var rpiDhtSensor = require('rpi-dht-sensor');
 
var dht = new rpiDhtSensor.DHT22(12);
 
function read () {
  var readout = dht.read();
 
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
        'humidity: ' + readout.humidity.toFixed(2) + '%');
    setTimeout(read, 50);
}
read();
