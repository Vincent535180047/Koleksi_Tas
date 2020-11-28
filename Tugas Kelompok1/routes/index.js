const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('pages/home.ejs', {layout: false});
});

module.exports = router;