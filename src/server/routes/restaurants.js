const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');
const validation = require('./validation');

function restaurants() { return knex('restaurants'); }

//render restaurants view
router.get('/', (req, res, next) => {
  restaurants().select('*')
  .then((results) => {
    //renderObject is the database data to send back
    const renderObject = {};
    //setting results equal the renderObject
    renderObject.restaurants = results;
    //render html page and renderObject on GET request
    res.render('restaurant_pages', renderObject);
  });
});

router.delete('/:id/delete', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('join_reviews_restaurants')
  .where('restaurant_id', id)
  .del()
  .then((employees) => {
    knex('employees')
    .where('restaurant_id', id)
    .del()
    .then((restaurants) => {
      knex('restaurants')
      .where('restaurants.id', id)
      .del()
      .then((results) => {
        res.status(200).send({
          status: 'success'
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({
      status:'Server Error',
      message: 'Check Server Log'
    });
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
  const picture_url = req.body.picture;
  knex('restaurants')
  .insert({
    name: name,
    street: street,
    city: city,
    state: state,
    zip: zip,
    cuisine: cuisine,
    description: description,
    picture_url: picture_url
  }, '*')
  .then((results) => {
    // console.log(results);
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

router.get('/:id', (req, res, next) => {
  const restaurantId = parseInt(req.params.id);
  knex('restaurants')
  .join('join_reviews_restaurants','join_reviews_restaurants.restaurant_id', 'restaurants.id')
  .join('reviews', 'reviews.id', 'join_reviews_restaurants.review_id')
  .select('*')
  .where('restaurant_id', restaurantId)
  // [{ a: 3, b: 10 }, { a: 3, b: 114 }] >> { a: 3, b: [10, 114] }
  .then((results) => {
    console.log(results);
    const singleRestaurantObject = {};

    singleRestaurantObject.restaurantz = results;
    res.render('single_restaurant', singleRestaurantObject);
  });
});

router.get('/view/:id', (req, res, next) => {

  var restaurant_id = parseInt(req.params.id);

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

module.exports = router;
