exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('role').defaultTo('User');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.string('email');
    table.string('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
