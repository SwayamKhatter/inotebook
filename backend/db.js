const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/iNotebook"
const mongoURI = "mongodb+srv://swayamkhatter:rs8nR9MNCpCca9mw@cluster0.mddwnyn.mongodb.net/CloudNotes?retryWrites=true&w=majority&appName=Cluster0"
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