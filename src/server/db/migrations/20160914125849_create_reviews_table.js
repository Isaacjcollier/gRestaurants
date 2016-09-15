exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.integer('user_rating');
    table.string('user_review').notNullable();
    table.timestamp('date_entered').notNullable().defaultTo(knex.fn.now());
    table.string('user_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
