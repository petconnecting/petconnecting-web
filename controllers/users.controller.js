
const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../model/user.model');

module.exports.create = (req, res, next) => {
  res.render('auth/signup');
}

module.exports.doCreate = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      console.log('ENTER');
      if (user) {
        // cargar vista de Handlebars que nos interese
        res.render('auth/signup', {
          user: req.body,
          errors: {
            email: "already exists"
          }
        });
      } else {
        user = new User(req.body);
        return user.save()
          .then(user => {
            res.redirect('auth/signup');
          });
      }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('auth/signup', { 
          user: req.body,
          errors: error.errors
        });
      } else {
        next(error);
      }
    });
}
