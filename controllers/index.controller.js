const createError = require('http-errors');

module.exports.showHome = (req, res, next) => {
  res.render('index', {
    title: 'PetConnecting'
  });
}