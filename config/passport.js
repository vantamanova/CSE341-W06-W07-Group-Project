// config/passport.js
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID || 'your_client_id',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'your_client_secret',
    callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:3000/github/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

// Session handling
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

module.exports = passport;
