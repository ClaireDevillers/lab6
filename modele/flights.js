const mongoose= require ('mongoose');
const Schema=mongoose.Schema;

const flightSchema= new Schema({
    airline:String,
    airport:String,
    flightNo:Number,
    departs:Date,
});

let flightModele= mongoose.model("flight",flightSchema);
module.exports = flightModele