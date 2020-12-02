module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash("error_msg", "Harap login untuk melihat halaman ini");
      //res.redirect("/pages/login");
      res.render('pages/login', {layout: false});
    },
};