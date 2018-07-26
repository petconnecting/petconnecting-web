const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../model/user.model');


module.exports.create = (req, res, next) => {
  res.render('/', {
    user: new User()
  });
}

module.exports.doCreate = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.render("index", {
      user: new User(req.body),
      errors: {
        "email": "Error de autentificación",
        "password": "Error de autentificación"
      }
    })
  } else {
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          user.checkPassword(password)
            .then((match) => {
              if (match) {
                console.log('User:', user)
                console.log('Session: ', req.session)

                //req.session.currentUser = user;
                res.render('logeado', {
                  user: user
                });
              } else {
                res.render("sessions/create", {
                  user: new User(req.body),
                  errors: {
                    "password": "Wrong password"
                  }
                })
              }
            })
            .catch(error => next(error));
        } else {
          res.render("sessions/create", {
            user: new User(req.body),
            errors: error.errors
          })
        }
      })
      .catch(error => next(error))
  }
}

module.exports.delete = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
}