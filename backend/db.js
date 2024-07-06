const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://swayamkhatter:eqpb3yu2cd@cluster0.hq7bs1c.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Sucessfull");
    })
}

module.exports = connectToMongo;