/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('users', function(table) {
          table.increments('user_id').primary(); // Primary Key
          table.string('name', 100).notNullable();
          table.string('email', 100).notNullable().unique(); // Unique constraint on email
          table.string('password', 255).notNullable();
          table.enu('user_type', ['client', 'freelancer']).notNullable();
          table.decimal('hourly_rate', 10, 2).nullable();
          table.text('skills').nullable(); // Can store a JSON string or comma-separated values
          table.decimal('average_rating', 3, 2).nullable();
          table.boolean('profile_complete').defaultTo(false);
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.hasTable('users').then(function(exists) {
      if (exists) {
        return knex.schema.dropTable('users');
      }
    });
  };
  