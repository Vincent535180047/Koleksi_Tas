const express = require('express');

const router = express.Router();

const { ensureAuthenticated } = require("../public/js/auth");
const { route } = require('./upload');

//abis login pindah home
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("pages/home", {
    nama: req.user.nama,
  })
);


router.get("/about", (req, res) =>
  res.render("pages/about")
);

router.get("/collection", (req, res) =>
  res.render("pages/collection")
);
module.exports = router;