exports.up = function(knex, Promise) {
  return knex.schema.createTable('passwords', function (table) {
    table.increments();
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('passwords');
};
