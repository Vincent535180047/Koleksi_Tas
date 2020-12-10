const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');
const app = express();


const Koleksi = require('../public/js/input')

router.get("/input", (req, res) => res.render("pages/input"));

router.get("/admin", (req, res) => res.render("pages/admin"));

  router.post("/admin", async (req, res, next) => {
    const namaadmin = req.body.namaadmin;
    const passadmin = req.body.passadmin;

    let errors = []

    if (namaadmin == "admin" && passadmin == "admin"){
      res.render('pages/input');
    }
    else {
      errors.push({ msg: "Hanya admin yang dapat mengakses !!" });
    }
  });

// handle post input 
  router.post('/input', async (req, res) => {
    const namaproduct = req.body.namaproduct;
    const material = req.body.material;
    const warna = req.body.warna;
    const pxlxt = req.body.pxlxt;
    const lainnya = req.body.lainnya;
    const harga = req.body.harga;
    const tas = req.body.tas;
    const merk = req.body.merk;
    const gambar = req.body.gambar;
    const link = req.body.link;


    let errors = []

    if (!namaproduct || !material || !warna || !pxlxt || !lainnya || !harga || !tas || !merk || !gambar || !link) {
        errors.push({ msg: "Harap isi semua data yang di minta" });
    }

    if (errors.length > 0) {
        res.render("pages/input", {
          errors,
          namaproduct,
          material,
          warna,
          pxlxt,
          lainnya,
          harga,
          tas,
          merk,
          gambar,
          link
        });
    } 
    else {
      const newKoleksi = new Koleksi({
        namaproduct,
        material,
        warna,
        pxlxt,
        lainnya,
        harga,
        tas,
        merk,
        gambar,
        link
      });

      newKoleksi
        .save()
        .then((koleksi) => {
          req.flash(
            "success_msg",
            "Anda berhasil upload tas"
          );
          res.redirect("/upload/input");
        })  
  };
});

module.exports = router;