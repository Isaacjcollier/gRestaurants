const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');

// function restaurants() { return knex('restaurants'); }

router.get('/', (req, res, next) => {
  res.render('restaurant_pages');
});

// router.get('/new', (req, res, next) => {
//
//   restaurants()
//   .select()
//   .then(restaurants => {
//       res.render('restaurants/new', {
//         title: 'New Restaurant',
//         genres: genres
//       });
//     });
// });
//

router.get('/1', (req, res, next) => {
  res.render('single_restaurant');
});

// router.get('/view/:id', (req, res, next) => {
//
//   var restaurant_id = parseInt(req.params.id);
//
//   restaurants()
//   .select()
//   .where('id', restaurant_id)
//   .then(records => {
//
//     res.render('Restaurant', {
//       title: 'Restaurant',
//       restaurant: records[0]
//     });
//   });
// });

module.exports = router;
