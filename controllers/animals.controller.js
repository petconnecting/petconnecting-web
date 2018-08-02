const createError = require("http-errors");
const mongoose = require("mongoose");
const Animal = require("../model/animals.model");

module.exports.details = (req, res, next) => {
    const id = req.params.id;

    Animal.findById(id)
        .then(animal => {
            res.render('animals/details', {
                animal
            });
        })
        .catch((error)=>{
            next(error)
        });
}

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
    console.log('CREATE');
    
  res.render("animals/create");
};

module.exports.doCreate = (req, res, next) => {
    console.log('DO CREATE');
    
    
  const animal = new Animal(req.body);
    console.log(animal);
    
  animal.save()
    .then(animal =>{
        console.log(animal);
        
        res.redirect('/animals');
    })
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
          //console.log(animal)
          res.render('animals/edit',{
              animal
          });
      })
      .catch((error)=>{
          next(error)
      });
};

module.exports.doEdit = (req, res, next) => {    
  const id = req.params.id;

  Animal.findById(id)
      .then(animal => {
          if (animal) {
            Object.assign(animal, req.body);
              animal.save()
                  .then(() => {
                      res.redirect(`/animals/${id}/details`);
                  })
                  .catch(error => {
                      if(error instanceof mongoose.Error.ValidationError) {
                          res.render('animals/edit', {
                              animal: animal, 
                              error: error.errors
                          });
                      } else {
                          next(error);
                      }
                  })
          } else {
              console.error('No hay animal :(')
              next(error);
          }
      })
      .catch(error => next(error));
};


module.exports.doDelete = (req, res, next) => {
    let id = req.params.id;
    Animal.findByIdAndRemove(id)
    .then(()=> {
        res.redirect('/animals');
        console.info('borrao');
    })
    .catch(error => {
        console.error('pos no sa borrao');
    })

};