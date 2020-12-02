const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/db_koleksi_tas';
mongoose.connect(
dbUrl,
{ useNewUrlParser: true }
);
const db = mongoose.connection;

db.then("open", () => {
console.log("Successfully connected to MongoDB using mongoose.");
});

db.catch((err) => console.log(err));
module.exports = db;