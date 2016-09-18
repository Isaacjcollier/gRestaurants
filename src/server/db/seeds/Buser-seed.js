//user seed data
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Jordon',
          last_name: 'Hoshor',
          role: 'Admin',
          email: 'jordonhoshor@galvanize.com',
          username: 'ho0dlum'
        }),
        knex('users').insert({
          first_name: 'Phil',
          last_name: 'Benz',
          email: 'philbenz@galvanize.com',
          username: 'phillyiet'
        }),
        knex('users').insert({
          first_name: 'Akiko',
          last_name: 'Okabe',
          email: 'akikookabe@galvanize.com',
          username: 'okabesan'
        }),
        knex('users').insert({
          first_name: 'Isaac',
          last_name: 'Collier',
          email: 'isaacjcollier@galvanize.com',
          username: 'chunkywombat'
        })
      ]);
      console.log('am i in reviews yet?');
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
