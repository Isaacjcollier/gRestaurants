exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join_reviews_restaurants').del()
    .then(function () {

    });
};
