const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  
});

router.post('account/login', async (req, res) => {
    const account = require('public/js/account.js')
    const db = require('public/js/db.js')
    const email = req.body.email;

    var myQuery = account.findOne({
        email: email 
    })

    const password = req.body.password;
    
    myQuery.exec((error, data) => {
        if (data) {
            if (data.email === email) {
                if (data.password === password) {
                    res.redirect('pages/home.ejs');
                }
                else {
                    res.render('pages/login', { error: 'Wrong email or password.' });
                }
            }
            else {
                res.render('pages/login', { error: 'Email is not registered as member.' });
            }
        }
        else {
            console.log('Error!');
        }
    });
})

module.exports = router;