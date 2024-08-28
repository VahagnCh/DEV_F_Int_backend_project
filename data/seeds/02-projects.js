/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Disable foreign key constraints
  await knex.raw('SET session_replication_role = replica;');

  // Delete all entries from the projects table
  await knex('projects').del();

  // Re-enable foreign key constraints
  await knex.raw('SET session_replication_role = DEFAULT;');

  // Insert seed entries for projects
  await knex('projects').insert([
    {
      project_name: 'Website Redesign',
      description: 'Complete redesign of the corporate website.',
      client_id: 2, 
      freelancer_id: 1, 
      status: 'in progress',
      start_date: knex.fn.now(),
      end_date: null,
      estimated_hours: 120,
      total_price: 6000.00,
      advance_paid: true
    },
    {
      project_name: 'Mobile App Development',
      description: 'Development of a mobile app for e-commerce.',
      client_id: 4, 
      freelancer_id: 3, 
      status: 'pending',
      start_date: knex.fn.now(),
      end_date: null,
      estimated_hours: 200,
      total_price: 12000.00,
      advance_paid: false
    },
    {
      project_name: 'Logo Design',
      description: 'Design a new logo for the brand.',
      client_id: 6, 
      freelancer_id: 5, 
      status: 'completed',
      start_date: knex.fn.now(),
      end_date: knex.fn.now(),
      estimated_hours: 40,
      total_price: 1800.00,
      advance_paid: true
    },
    {
      project_name: 'AI System Development',
      description: 'Development of an AI-based recommendation system.',
      client_id: 8, 
      freelancer_id: 7, 
      status: 'in progress',
      start_date: knex.fn.now(),
      end_date: null,
      estimated_hours: 300,
      total_price: 21000.00,
      advance_paid: false
    },
    {
      project_name: 'Online Course Creation',
      description: 'Create a comprehensive online course on programming.',
      client_id: 10, 
      freelancer_id: 9, 
      status: 'pending',
      start_date: knex.fn.now(),
      end_date: null,
      estimated_hours: 250,
      total_price: 20000.00,
      advance_paid: false
    }
  ]);
};
