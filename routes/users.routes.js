const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PetConnecting' });
});

router.get('/signup', function(req, res, next){
  res.render('auth/signup');
})

router.get('/login', function(req, res, next){
  res.render('auth/login');
})


module.exports = router;
