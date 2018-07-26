const User = require("../model/user.model");
const LocalStrategy = require("passport-local").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;

module.exports.setup = passport => {
  passport.use(
    "local-auth",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, next) => {
        User.findOne({ email: email })
          .then(user => {
            if (!user) {
              next(null, user, "Invalid email or password");
            } else {
              user
                .checkPassword(password)
                .then(match => {
                  if (match) {
                    next(null, user);
                  } else {
                    next(null, null, "Invalid email or password");
                  }
                })
                .catch(error => next(error));
            }
          })
          .catch(error => next(error));
      }
    )
  );
};
