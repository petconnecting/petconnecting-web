const createError = require("http-errors");
const mongoose = require("mongoose");
const Animal = require("../model/animals.model");

module.exports.list = (req, res, next) => {
  Animal.find()
    .then(animal => {
      res.render('animals/list', {
        animal
      });
    })
    .catch(error => {
      next(error);
    });
}



module.exports.create = (req, res, next) => {
  res.render("animals/create");
};

module.exports.doCreate = (req, res, next) => {
  const animal = new Animal(req.body);

  animal
    .save()
    .then(() => res.redirect("/animals"))
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error.errors);
        res.render("animals/create", {
          animal: req.body,
          errors: error.errors
        });
      } else {
        next(error);
      }
    });
};
