exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table
      .increments('id')
      .notNullable()
      .primary();
    table.string('name', 255).notNullable();
    table
      .string('email', 255)
      .unique()
      .notNullable();
    table.timestamp('deleted_at');
    table.timestamps(true, false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
