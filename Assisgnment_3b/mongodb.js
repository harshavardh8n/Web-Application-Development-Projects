// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const database = 'Students';
// const client = new MongoClient(url);

// const dbConnect = async()=>{
//     const result = await client.connect();
//     const db = await result.db(database);
//     return db.collection('profile');
// }

const express = require("express");
const mongoose = require("mongoose");
const Key="mongodb+srv://harshavardhangaikwad39:student@cluster0.qobmj7q.mongodb.net/-backend?retryWrites=true&w=majority&appName=Cluster0"

const dbConnect = async()=>{
    try {
        await mongoose.connect(Key);
        console.log("Connection estalised with mongodb");        
    } catch (error) {
        console.log("Connection estalised with mongodb");  
        process.exit(0);
    }
};

module.exports = dbConnect;

module.exports=dbConnect;