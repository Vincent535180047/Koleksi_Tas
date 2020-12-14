const express = require('express');
const router = express.Router();

const dbKoleksi = require('../public/js/input');

router.get("/hush-puppies", (req, res) => {
    tas = dbKoleksi.find({merk: 'hpuppies', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/hush-puppies", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/burberry", (req, res) => {
    tas = dbKoleksi.find({merk: 'burberry', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/burberry", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/gucci", (req, res) => {
    tas = dbKoleksi.find({merk: 'gucci', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/gucci", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/chanel", (req, res) => {
    tas = dbKoleksi.find({merk: 'chanel', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/chanel", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/prada", (req, res) => {
    tas = dbKoleksi.find({merk: 'prada', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/prada", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

module.exports = router;