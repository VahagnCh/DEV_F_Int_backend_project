/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('ratings').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('ratings', function(table) {
          table.increments('rating_id').primary(); // Primary Key
          table.integer('project_id').unsigned().notNullable(); // Foreign Key to projects
          table.integer('rating').unsigned().notNullable(); // Rating value (e.g., 1-5)
          table.text('comments').nullable(); // Optional comments
          table.datetime('rating_date').defaultTo(knex.fn.now()); // Date of the rating
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
    return knex.schema.hasTable('ratings').then(function(exists) {
      if (exists) {
        return knex.schema.dropTable('ratings');
      }
    });
  };
  