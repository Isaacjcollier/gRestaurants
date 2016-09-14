const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
//const genres = require('../genres.json');

function restaurants() { return knex('restaurants'); }

router.get('/', function (req, res, next) {
  restaurants().select().then(records => {
    res.render('restaurants/', {
      title: 'Restaurants',
      restaurants: records
    });
  });
});

router.get('/new', (req, res, next) => {

  restaurants()
  .select()
  .then(restaurants => {
      res.render('restaurants/new', {
        title: 'New Restaurant',
        genres: genre
      });
    });
});

router.get('/view/:id', (req, res, next) => {

  restaurant_id = parseInt(req.params.id);

  restaurants()
  .select()
  .where('id', restaurant_id)
  .then(records => {

    res.render('Restaurant', {
      title: 'Restaurant',
      restaurant: records[0]
    });
  });
});
