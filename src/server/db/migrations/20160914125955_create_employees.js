exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('role').notNullable();
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
