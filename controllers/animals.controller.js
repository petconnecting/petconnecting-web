const createError = require("http-errors");
const mongoose = require("mongoose");
const Animal = require("../model/animals.model");

module.exports.list = (req, res, next) => {
  Animal.find()
    .then(animals => {
      res.render('animals/list', {
        animals
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
    .then(() => res.redirect("/animals/list"))
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

module.exports.edit = (req, res, next) => {
  const id = req.params.id; 
  Animal.findById(id)
      .then(animal => {
          res.render('animals/create',{
              animal
          });
      })
      .catch((error)=>{
          next(error)
      });
};

module.exports.doEdit = (req, res, next) => {
  // let company = new Company(req.body);
  const id = req.params.id;

  Animal.findById(id)
      .then(animal => {
          if(animal) {
              Object.assign(animal, req.body);
              company.save()
                  .then(() => {
                      res.redirect(`/animals/${id}`);
                  })
                  .catch(error => {
                      if(error instanceof mongoose.Error.ValidationError) {
                          res.render('animals/create', {
                              animals: animals, 
                              error: error.errors
                          });
                      } else {
                          next(error);
                      }
                  })
          } else {
              next(error);
          }
      })
      .catch(error => next(error));
};
