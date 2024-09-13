const mongoose = require("mongoose");

const URI = "mongodb+srv://harshavardhangaikwad39:student@cluster0.hrh2uch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const URI="mongodb://localhost:27017";

const dbconnect= async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection estalished")
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = dbconnect;