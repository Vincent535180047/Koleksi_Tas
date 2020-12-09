const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

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
    const gambar = req.body.gambar;

    let errors = []

    if (!namaproduct || !material || !warna || !pxlxt || !lainnya || !harga || !gambar) {
        errors.push({ msg: "Harap isi semua data yang di minta" });
    }
    if (!gambar) {
        errors.push({msg: 'test'});
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
          gambar,
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