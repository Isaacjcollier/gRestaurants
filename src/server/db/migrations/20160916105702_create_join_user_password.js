exports.up = function(knex, Promise) {
  return knex.schema.createTable('join_users_passwords', function (table) {
    table.increments();
    table.string('user_id').notNullable();
    table.string('pwd_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('join_users_passwords');
};
