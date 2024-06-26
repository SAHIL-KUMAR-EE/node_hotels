const mongoose = require('mongoose');
require('dotenv').config();

// Connection URL
// database - mydatabase, users, etc.
// const mongoURL = `mongodb://localhost:27017/hotels`;
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;

// Showing deprecated
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Connected to MongoDB Server 27017");
})

db.on('disconnected', ()=>{
    console.log("Connection Terminated");
})

db.on('error',(err)=>{
    console.error("Error ! :: ", err);
})

module.exports = db;