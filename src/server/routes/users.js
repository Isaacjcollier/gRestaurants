const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');

function users() { return knex('users'); }

router.get('/', function (req, res, next) {
  res.render('restaurant_review');
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
