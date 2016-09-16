exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.string('user_rating').notNullable();
    table.string('user_review').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
