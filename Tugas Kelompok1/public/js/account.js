const mongoose = require("mongoose"),
    accountSchema = mongoose.Schema({
        nama: String,
        email: String,
        password: String
    });
module.exports = mongoose.model("account", accountSchema);