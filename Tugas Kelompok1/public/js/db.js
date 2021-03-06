const mongoose = require('mongoose');
//const Grid = require('gridfs-stream');
//let gfs;
const dbUrl = process.env.MONGODB_URI || 'mongodb+srv://User:user@cluster0.iyla9.mongodb.net/db_koleksi_tas?retryWrites=true&w=majority'; //'mongodb://localhost:27017/db_koleksi_tas';

mongoose.connect(
dbUrl,
{ useNewUrlParser: true }
);
const db = mongoose.connection;

db.then("open", () => {
    console.log("Successfully connected to MongoDB using mongoose.");
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('koleksi');
});

db.catch((err) => console.log(err));
module.exports = db;