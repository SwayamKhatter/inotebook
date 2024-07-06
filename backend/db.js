const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://swayamkhatter:eqpb3yu2cd@cluster0.hq7bs1c.mongodb.net/"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectToMongo;