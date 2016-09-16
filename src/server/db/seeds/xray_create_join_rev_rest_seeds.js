exports.seed = function(knex, Promise) {
    //Deletes ALL existing entries
    return knex('reviews').del()
    .then(function () {

      //for this seed we should run a sql count against the number of restaurants and the number of users.  this would be a better way to generate data.

      knex('users').min('id')
      .then(min_results => {
        let min_user_id = min_results[0].min;
        console.log('min: ', min_results);
        knex('users').max('id')
        .then(max_results => {
          let max_user_id = max_results[0].max;

          console.log('max: ', max_results);

          var reviewArray = [];
          var reviewObj = {};

          for (var i = 1; i < 15; i++) {

            let rating = Math.floor((Math.random() * 4) + 1);

            let userIDKey = Math.floor((Math.random() * (max_user_id - min_user_id)) + min_user_id);

            let reviewObj = {
              user_rating: rating,
              user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user_id: userIDKey
            };
            reviewArray.push(reviewObj);
          }

          knex('reviews').insert(
            reviewArray
            ).then(records => {
              return true;
            });
        });
      });
    });
  };
