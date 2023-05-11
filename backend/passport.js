const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = '823644075634-pvdsn75etb9qs5oub5o2sk66fg1f361m.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = 'd149dd7db2db7d0fa5a7';
const GITHUB_CLIENT_SECRET = 'f644bf743e48a1c68ae3946da57c0b4ef362b2c7';

const FACEBOOK_APP_ID = '1023137245316934';
const FACEBOOK_APP_SECRET = '982ff51106ba3a50f3c8e2b4e704e6f3';

passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    })
);
  
passport.use(
    new GithubStrategy(
    {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    })
);
  
passport.use(
    new FacebookStrategy(
    {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    })
);
  
passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((user, done) => {
    done(null, user);
});