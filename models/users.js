// Knex config and conexction to the DB
const knex = require('../config')

// CREATE

const create = (userData) => {
    return knex
      .insert(userData) // Data to insert
      .into('users') // Target table
      .returning(['user_id', 'name', 'email', 'user_type', 'hourly_rate', 'skills', 'average_rating', 'profile_complete']); // Specify the fields to return
  };

// READ
    // READ ALL 

const getAll = () => {
    return knex
      .select('*') // Select all columns
      .from('users'); // From the 'users' table
  };
    // READ BY ID
    
const getById = (user_id) => {
    return knex
      .select('*') // Select all columns
      .from('users') // From the 'users' table
      .where({ user_id }) // Where the ID matches
      .first(); // Return the first matching record
  };
// UPDATE

const update = (user_id , userData) => {
    return knex
      .update(userData) // Data to update
      .from('users') // Target table
      .where({ user_id  }) // Where the ID matches
      .returning(['user_id', 'name', 'email', 'user_type', 'hourly_rate', 'skills', 'average_rating', 'profile_complete']); // Specify the fields to return
  };
// DELETE 

const remove = (user_id ) => {
    return knex
      .del() // Delete the record
      .from('users') // Target table
      .where({ user_id }) // Where the ID matches
      .returning(['user_id', 'name', 'email', 'user_type']); // Specify the fields to return after deletion
  };
// Function Exports

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
  };