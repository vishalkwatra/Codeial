const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({
    clientID: "848710779014-rd3927hki11t13d04vgqcjbmk7rqoucl.apps.googleusercontent.com",
    clientSecret:"sr3zU6BCgkrI1Rlwopi1rIC0",
    callbackURL:"http://localhost:8000/users/auth/google/callback"
}, function(accessToken, refreshToken, profile, done){
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err) {
                console.log('Error in google strategy passport', err);
                return;
            }

            console.log(accessToken);
            console.log(profile);

            if (user) {
                return done(null, user);
            } else {
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err) {
                        console.log('error in creating google strategy-passport', err);
                        return;
                    }
                    return done(null, user);
                });
            }

        });

}));

module.exports = passport;