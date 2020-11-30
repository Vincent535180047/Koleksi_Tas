const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  
});
const account = require('../public/js/account')
const db = require('../public/js/db')

router.post('/register', async (req, res) => {
    const email = req.body.email;
    const nama = req.body.nama;
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    if (password1 === password2) {
        const newAccount = new account({
            nama: nama,
            email: email,
            password: password1
        });
        newAccount.save((error, data) => {
            if (error) {
                console.log(error);
            }
        });
    }
    else {
        //
    }
});

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password1;

    var myQuery = account.findOne({
        email: email 
    })
    
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
            console.log(error);
        }
    });
})

module.exports = router;