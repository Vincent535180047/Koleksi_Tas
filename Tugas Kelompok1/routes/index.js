const express = require('express');

const router = express.Router();

const { ensureAuthenticated } = require("../public/js/auth");

/*
router.get('/', async (req, res) => {
  res.render('pages/login', {layout: false});
});
*/

//dasboard
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("pages/home", {
    nama: req.user.nama,
  })
);

module.exports = router;