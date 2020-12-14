const express = require('express');
const router = express.Router();

const dbKoleksi = require('../public/js/input');

router.get("/hush-puppies", (req, res) => {
    tas = dbKoleksi.find({merk: 'hpuppies', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/hush-puppies", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/burberry", (req, res) => {
    tas = dbKoleksi.find({merk: 'burberry', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/burberry", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/coach", (req, res) => {
    tas = dbKoleksi.find({merk: 'coach', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/coach", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/fossil", (req, res) => {
    tas = dbKoleksi.find({merk: 'fossil', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/fossil", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/guess", (req, res) => {
    tas = dbKoleksi.find({merk: 'guess', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/guess", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/hermes", (req, res) => {
    tas = dbKoleksi.find({merk: 'hermes', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/hermes", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

router.get("/louisvuitton", (req, res) => {
    tas = dbKoleksi.find({merk: 'lvuitton', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/louisvuitton", {tas: data});
        console.log(JSON.stringify(data));
    }
    });
});

module.exports = router;