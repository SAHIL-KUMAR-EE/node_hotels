const mongoose = require('mongoose');

// Connection URL
// database - mydatabase, users, etc.
const mongoURL = `mongodb://localhost:27017/hotels`;

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