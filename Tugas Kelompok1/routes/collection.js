const express = require('express');
const router = express.Router();

const dbKoleksi = require('../public/js/input');

router.get("/taspria", (req, res) => {
    tas = dbKoleksi.find({merk: 'hpuppies', tas: 'pria'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas pria/hush-puppies", {tas: data});
        console.log(JSON.stringify(data));
    }
    });

});

router.get("/taswanita", (req, res) => {
    tas = dbKoleksi.find({merk: 'hpuppies', tas: 'wanita'}).exec((error, data) => {
    if (data) {
        res.render("../public/html/tas wanita/hush-puppies", {tas: data});
        console.log(JSON.stringify(data));
    }
    });

});


module.exports = router;