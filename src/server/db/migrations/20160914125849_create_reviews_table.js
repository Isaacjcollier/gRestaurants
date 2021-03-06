exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.integer('user_rating');
    table.string('user_review').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
