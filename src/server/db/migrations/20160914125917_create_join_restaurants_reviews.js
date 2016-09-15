exports.up = function(knex, Promise) {
  return knex.schema.createTable('join_reviews_restaurants', function (table) {
    table.increments();
    table.string('user_id').notNullable();
    table.string('restaurant_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('join_reviews_restaurants');
};
