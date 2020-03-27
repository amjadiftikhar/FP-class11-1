exports.up = function(knex) {
  return knex.schema.createTable('materials', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('name').notNullable();
    table
      .integer('fk_unit_id')
      .unsigned()
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
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('materials');
};
