/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('payments').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('payments', function(table) {
          table.increments('payment_id').primary(); // Primary Key
          table.integer('project_id').unsigned().notNullable(); // Foreign Key to projects
          table.decimal('amount', 10, 2).notNullable(); // Payment amount
          table.datetime('payment_date').defaultTo(knex.fn.now()); // Date of the payment
          table.enu('payment_type', ['advance', 'final']).notNullable(); // Payment type
          table.enu('status', ['pending', 'completed']).notNullable().defaultTo('pending'); // Payment status
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
  
          // Foreign Key constraint
          table.foreign('project_id').references('project_id').inTable('projects').onDelete('CASCADE');
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.hasTable('payments').then(function(exists) {
      if (exists) {
        return knex.schema.dropTable('payments');
      }
    });
  };
  