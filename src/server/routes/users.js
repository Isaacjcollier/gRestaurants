const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');
const bcrypt = require('bcrypt');

function users() { return knex('users'); }
function joinUserPwds() { return knex('join_users_passwords'); }
function passwords() { return knex('passwords'); }

router.get('/', function (req, res, next) {
  res.render('restaurant_review');
});

router.post('/getuser', function (req, res, next) {
  // Hash the password with the salt
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  knex('users')
  .insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    username: req.body.userName
  })
  .then((results) => {
    console.log('inserting into passwords');
    knex('passwords')
    .returning('id')
    .insert({
      password: hash
    })
    .then((results) => {
      console.log(results);
      if (results) {
        res.redirect('/api/v1/restaurants');
      } else {
        res.status(500).send({
          status: 'error',
          message: 'error'
        });
      }
    })
  .catch((err) => {
      console.log(err);
      res.status(500);
    });
  });
});

router.post('/new', function (req, res, next) {
  // Hash the password with the salt
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  knex('users')
  .returning('id')
  .insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    username: req.body.userName,
    password: hash
  })
  .then((results) => {
      if (results) {
        res.redirect('/api/v1/restaurants');
      } else {
        res.status(500).send({
          status: 'error',
          message: 'error'
        });
      }
    })
  .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.get('/sign_in', function (req, res, next) {
  knex('users')
  .where({
    username: req.query.username
  })
  .select('password')
  .then((results) => {
      if (bcrypt.compareSync(req.query.password, results[0].password)) {
        console.log('You are logged in!');
        res.redirect('/api/v1/restaurants');
      } else {
        res.status(500).send({
          status: 'error',
          message: 'error'
        });
      }
    })
  .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post('/', (req, res, next) => {
  // console.log('test',req.body);
  const user_review = req.body.user_review;
  const user_rating = req.body.user_rating;
  const user_id = req.body.user_id;
  knex('reviews')
  .insert({
    user_review: user_review,
    user_rating: user_rating,
    user_id: user_id
  }, '*')
  .then((results) => {
    console.log(results);
    if (results.length) {
      res.redirect('/api/v1/restaurants');
    } else {
      res.status(404).send({
        status: 'error',
        message: 'error'
      });
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500);
  });
});

module.exports = router;
