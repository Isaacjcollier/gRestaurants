'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');
const validation = require('./validation');

function restaurants() { return knex('restaurants'); }
function employees() { return knex('employees'); }

//render restaurants view
router.get('/', (req, res, next) => {
  var renderObject = {};
  knex('reviews')
  .avg('user_rating')
  .groupBy('restaurant_id')
  .select('restaurant_id')
  .then((rating) => {
    renderObject.rating = rating;
    restaurants()
    .select('*')
    .then((results) => {
      // console.log(results);
      //renderObject is the database data to send back
      //setting results equal the renderObject
      renderObject.restaurants = results;
      //render html page and renderObject on GET request
      // console.log(renderObject.rating);
      res.render('restaurant_pages', renderObject);
    });
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

  // console.log(req.body);

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
  const id = parseInt(req.params.id);
  //create promises for restaurant page
  var findRestaurant = knex('restaurants').where('restaurants.id', id).first();
  var findReviews = knex('reviews').where('reviews.restaurant_id', id);
  var findUsers = knex('reviews').where('reviews.restaurant_id', id).join('users', 'users.id', 'reviews.user_id').select('users.id', 'users.first_name', 'users.last_name');
  var findEmployees = knex('employees').where('employees.restaurant_id', id);
  //return all promises
  Promise.all([
    findRestaurant,
    findReviews,
    findUsers,
    findEmployees
  ])
  .then((results) => {
    //assign renderObject for html view
    const singleRestaurantObject = {};
    singleRestaurantObject.restaurants = results[0];
    singleRestaurantObject.reviews = results[1];
    singleRestaurantObject.users = results[2];
    singleRestaurantObject.employees = results[3];
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

// EMPLOYEES ROUTES

router.post('/employees/new/:id', (req, res, next) => {

    var employee = {
      name: req.body.name,
      role: req.body.role,
      restaurant_id: parseInt(req.params.id)
    };

    employees()
    .insert(employee)
    .then(records => {
      console.log('inserted employee!');
      res.redirect('/api/v1/restaurants/' + req.params.id);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
  });

router.post('/employees/edit/:empID', (req, res, next) => {

  var employee_id = parseInt(req.params.empID);
  var employee = {
    name: req.body.name,
    role: req.body.role
  };
  console.log('restaurant', req.body.restaurant_id);
  console.log('employee edit: ', employee);

  employees()
  .update(employee)
  .where('id', employee_id)
  .then(records => {
    console.log('updated employee!');
    res.redirect('/api/v1/restaurants/' + req.body.restaurant_id);
  })
  .catch((err) => {
    console.log(err);
    res.status(500);
  });
});

router.post('/employees/delete/:empID', (req, res, next) => {

      var employee_id = parseInt(req.params.empID);

      employees()
      .delete()
      .where('id', employee_id)
      .then(records => {
          res.redirect('/api/v1/restaurants/' + req.body.restaurant_id);
        });
    });

module.exports = router;
