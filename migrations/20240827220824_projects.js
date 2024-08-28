/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('projects').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('projects', function(table) {
          table.increments('project_id').primary(); // Primary Key
          table.string('project_name', 150).notNullable();
          table.text('description').nullable();
          table.integer('client_id').unsigned().notNullable();
          table.integer('freelancer_id').unsigned().nullable();
          table.enu('status', ['pending', 'in progress', 'completed']).notNullable().defaultTo('pending');
          table.datetime('start_date').notNullable();
          table.datetime('end_date').nullable();
          table.integer('estimated_hours').unsigned().nullable();
          table.decimal('total_price', 10, 2).notNullable();
          table.boolean('advance_paid').defaultTo(false);
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
  
          // Foreign Keys
          table.foreign('client_id').references('user_id').inTable('users').onDelete('CASCADE');
          table.foreign('freelancer_id').references('user_id').inTable('users').onDelete('SET NULL');
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    // Ensure that this function also returns a promise
    return knex.schema.hasTable('projects').then(function(exists) {
      if (exists) {
        return knex.schema.dropTable('projects');
      }
    });
  };
  