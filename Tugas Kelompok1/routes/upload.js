const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require('multer');
const upload = multer({ dest: 'upload/'});
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');

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
  router.post('/input', upload.single('gambar'), async (req, res) => {
    const jenis = req.body.jenis;
    const merk = req.body.merk;
    const namaproduct = req.body.namaproduct;
    const material = req.body.material;
    const warna = req.body.warna;
    const pxlxt = req.body.pxlxt;
    const lainnya = req.body.lainnya;
    const harga = req.body.harga;
    const link_beli = req.body.link_beli;
    const gambar = req.body.gambar;

    let errors = []

    if (!jenis || !merk || !namaproduct || !material || !warna || !pxlxt || !lainnya || !harga || !gambar || !link_beli) {
        errors.push({ msg: "Harap isi semua data yang di minta" });
    }
    if (!gambar) {
        errors.push({msg: 'test'});
    }
    if (errors.length > 0) {
        res.render("pages/input", {
          errors,
          jenis,
          merk,
          namaproduct,
          material,
          warna,
          pxlxt,
          lainnya,
          harga,
          link_beli,
          gambar,
        });
    } 
    else {
      const newKoleksi = new Koleksi({
        jenis,
        merk,
        namaproduct,
        material,
        warna,
        pxlxt,
        lainnya,
        harga,
        link_beli,
        gambar,
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