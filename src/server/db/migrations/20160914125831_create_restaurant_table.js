exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('street').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.string('cuisine').notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
