exports.up = function(knex) {
  return knex.schema.createTable('crop_stages', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.varchar('name', 255).notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crop_stages');
};