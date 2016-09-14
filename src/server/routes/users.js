const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const genres = require('../genres.json');

function users() { return knex('users'); }

router.get('/', function (req, res, next) {
  users().select().then(records => {
    res.render('users/', {
      title: 'Users',
      users: records
    });
  });
});

router.get('/new', (req, res, next) => {

  users()
  .select()
  .then(writers => {
      res.render('users/new', {
        title: 'New User',
        genres: genres
      });
    });
});

module.exports = router;
