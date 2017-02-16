var mongoose = require('mongoose'); //importing mongoose
//creating another variable called schema which uses mongoose schema object
var Schema = mongoose.Schema;
//schema is blue prints
var schema = new Schema({
  imagePath:{type:String , required:true},
  title:{type:String , required:true},
  description:{type:String , required:true}
});

module.exports = mongoose.model('Product',schema);
