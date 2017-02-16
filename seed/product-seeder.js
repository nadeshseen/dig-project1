var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: "https://www.adafruit.com/includes/templates/adafruit2013/images/little_pi.png",
    title : "Raspberry Pi",
    description:"The Raspberry Pi is a tiny and affordable computer that you can use to learn programming . "
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/220px-Arduino_Uno_-_R3.jpg",
    title : "Arduino Uno - R3",
    description:"Awesome Device"
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/220px-Arduino_Uno_-_R3.jpg',
    title : "Arduino",
    description:"Awesome Device"
  }),
  new Product({
    imagePath: 'https://www.adafruit.com/includes/templates/adafruit2013/images/little_pi.png',
    title : "Raspberry Pi",
    description:"Teach learn with Raspberry Pi"
  }),
  new Product({
    imagePath: 'https://www.adafruit.com/includes/templates/adafruit2013/images/little_pi.png',
    title : "Raspberry Pi",
    description:"Two raspberry pi on international space station running experiments created by schools ."
  })
];
var done = 0;
for (var i =0 ; i< products.length; i++){
  products[i].save(function(err,result){
    done++;
    if(done === products.length){
      exit();
    }
  }); //save method with mongoose helps to save model to database
}

function exit(){
  mongoose.disconnect();
}
