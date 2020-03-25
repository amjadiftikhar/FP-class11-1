exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table
      .increments('id')
      .notNullable()
      .primary();
    table.string('name').notNullable();
    table
      .string('email')
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
    table.timestamp('deleted_at').defaultTo(' ');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};