
module.exports.canDeleteAnimal = (req, res, next) => {
    if(req.session.currentUser._id === req.idasuprimir) {
      next();
      console.log('Bien tio! Te dejo suprimir')
    } else {
      console.log('ENTRO AQUI')
      res.redirect('back');
    }
};
  
// module.exports.noDeleteAnimal = (req, res, next) => {
//     if (req.session.currentUser_id) {
//       res.redirect("/"); 
//     } else {
//       next();
//     }
// }