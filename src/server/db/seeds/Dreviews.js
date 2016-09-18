//reviews seed data
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('reviews').insert({
          user_rating: 3,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 2,
          restaurant_id: 1
        }),
        knex('reviews').insert({
          user_rating: 4,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 4,
          restaurant_id: 2
        }),
        knex('reviews').insert({
          user_rating: 3,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 3,
          restaurant_id: 3
        }),
        knex('reviews').insert({
          user_rating: 1,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 2,
          restaurant_id: 4
        }),
        knex('reviews').insert({
          user_rating: 2,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 3,
          restaurant_id: 5
        }),
        knex('reviews').insert({
          user_rating: 3,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 4,
          restaurant_id: 6
        }),
        knex('reviews').insert({
          user_rating: 5,
          user_review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          user_id: 3,
          restaurant_id: 1
        })
      ]);
    });
};
