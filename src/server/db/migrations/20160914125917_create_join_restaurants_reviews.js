exports.up = function(knex, Promise) {
  return knex.schema.createTable('join_reviews_restaurants', function (table) {
    table.increments();
    table.integer('review_id').unsigned().references('id').inTable('reviews').notNullable();
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('join_reviews_restaurants');
};
