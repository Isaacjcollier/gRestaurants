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

router.post('/new', function (req, res, next) {
  // Hash the password with the salt
  var hash = bcrypt.hashSync(req.body.password);

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

router.post('/', (req, res, next) => {
  console.log(req.body);
  const review = req.body.review;
  const rating = req.body.rating;
  const user_id = req.body.user;
  knex('reviews')
  .insert({
    user_review: review,
    user_rating: rating,
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
