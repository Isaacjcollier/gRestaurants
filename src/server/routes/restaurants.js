const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');
const validation = require('./validation');

function restaurants() { return knex('restaurants'); }

//render restaurants view
router.get('/', (req, res, next) => {
  knex('restaurants').select()
  .then((results) => {
    //renderObject is the database data to send back
    const renderObject = {};
    //setting results equal the renderObject
    renderObject.restaurants = results;
    //render html page and renderObject on GET request
    res.render('restaurant_pages', renderObject);
  });
});

//update restaurant route
router.put('/:id/edit', (req, res, next) => {
  //PUT object body
  const id = parseInt(req.params.id);
  const updateRestaurantPicURL = req.body.picture_url;
  const updateRestaurantName = req.body.name;
  const updateRestaurantCuisine = req.body.cuisine;
  const updateRestaurantStreet = req.body.street;
  const updateRestaurantCity = req.body.city;
  const updateRestaurantState = req.body.state;
  const updateRestaurantZip = req.body.zip;
  const updateRestaurantDesc = req.body.description;
  //query table in database
  knex('restaurants')
    //update table with object
    .update({
      picture_url: updateRestaurantPicURL,
      name: updateRestaurantName,
      cuisine: updateRestaurantCuisine,
      street: updateRestaurantStreet,
      city: updateRestaurantCity,
      state: updateRestaurantState,
      zip: updateRestaurantZip,
      description: updateRestaurantDesc
    })
    //match id from route to id in table
    .where('id', id)
    .returning('*')
    .then((results) => {
      //check results
      if (results.length) {
        res.status(200).json({
          status: 'success',
          message: `${results[0].name}, ${results[0].picture_url}, ${results[0].cuisine}, ${results[0].street}, ${results[0].city}, ${results[0].state}, ${results[0].zip}, ${results[0].description} has been updated!`
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: 'That id does not exsist'
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 'Fail',
        message: 'Check server for logged error'
      });
    });
});

router.get('/new', (req, res, next) => {

  restaurants()
  .select()
  .then(restaurants => {
      res.render('restaurants/new', {
        title: 'New Restaurant',
        genres: genres
      });
    });
});

//render restaurant new
router.get('/new', (req, res, next) => {
  res.render('restaurant_admin_add');
});

//post restaurant new
router.post('/new', validation.checkValidation, (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const cuisine = req.body.cuisine;
  const description = req.body.description;
  knex('restaurants')
  .insert({
    name: name,
    street: street,
    city: city,
    state: state,
    zip: zip,
    cuisine: cuisine,
    description: description
  }, '*')
  .then((results) => {
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
