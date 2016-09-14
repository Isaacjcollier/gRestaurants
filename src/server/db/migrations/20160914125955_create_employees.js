exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('role').notNullable();
    table.string('restaurant_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
