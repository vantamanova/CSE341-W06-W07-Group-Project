// routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// GitHub login
router.get('/login', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub callback
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/api-docs' }),
  (req, res) => {
    req.session.user = req.user;
    res.send('You are logged in as ' + req.user.username);
    //res.redirect('/');
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.send('You are logged out successfully');
  });
});

module.exports = router;
