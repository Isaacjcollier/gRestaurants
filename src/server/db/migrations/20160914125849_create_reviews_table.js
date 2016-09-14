exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.string('user_rating').notNullable();
    table.string('user_review').notNullable();
    table.timestamp('date_entered').notNullable();
    table.string('user_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
