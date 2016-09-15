
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join_reviews_restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('join_reviews_restaurants').insert({
          restaurant_id: 1,
          review_id: 1
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 2,
          review_id: 2
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 3,
          review_id: 3
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 4,
          review_id: 4
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 5,
          review_id: 5
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 6,
          review_id: 6
        }),
        knex('join_reviews_restaurants').insert({
          restaurant_id: 1,
          review_id: 7
        })
      ]);
    });
};
