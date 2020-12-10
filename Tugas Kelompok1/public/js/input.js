const mongoose = require("mongoose"),
    koleksiSchema = mongoose.Schema({
        jenis: {
            type: String,
            required: true,
        },
        merk: {
            type: String,
            required: true,
        },
        namaproduct: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        warna: {
            type: String,
            required: true,
        },
        pxlxt: {
            type: String,
            required: true,
        },
        lainnya: {
            type: String,
            required: true,
        },
        harga: {
            type: String,
            required: true,
        },
<<<<<<< HEAD
        gambar: {
            type: Buffer,
            required: true,
        },
        tas: {
            type: String,
            required: true,
        },
        merk: {
=======
        link_beli: {
            type: String,
            required: true,
        },
        gambar:{
>>>>>>> e0d5a44eee0f207fc8eec88fb1dc73840e391176
            type: String,
            required: true,
        },
        link:{
            type: String,
            required: true,
        },
    });
module.exports = mongoose.model("Koleksi", koleksiSchema);