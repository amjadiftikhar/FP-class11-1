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
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
