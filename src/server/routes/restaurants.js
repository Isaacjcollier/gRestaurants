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

//render restaurant new
router.get('/new', (req, res, next) => {
  res.render('restaurant_admin_add');
});

//post restaurant new
router.post('/new', validation.checkValidation, (req, res, next) => {
  const name = req.body.name;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const cuisine = req.body.cuisine;
  const description = req.body.description;
  knex('restaurant')
  .insert({
    name: name,
    street: street,
    city: city,
    state: state,
    zip: zip,
    cuisine: cuisine,
    description: description
  }, '*')
  .then(() => {
    res.redirect('/new');
  })
  .catch((err) => {
    res.status(500);
  });
});

router.get('/1', (req, res, next) => {
  res.render('single_restaurant');
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
