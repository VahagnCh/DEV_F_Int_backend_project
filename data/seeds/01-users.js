/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Disable foreign key constraints
  await knex.raw('SET session_replication_role = replica;');

  // Delete all entries from dependent tables first
  await knex('payments').del();
  await knex('ratings').del();
  await knex('projects').del();
  await knex('users').del();

  // Re-enable foreign key constraints
  await knex.raw('SET session_replication_role = DEFAULT;');

  // Insert seed entries for users
  await knex('users').insert([
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      password: 'hashed_password_1', 
      user_type: 'freelancer',
      hourly_rate: 50.00,
      skills: JSON.stringify(['JavaScript', 'React', 'Node.js']),
      average_rating: 4.5,
      profile_complete: true,
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      password: 'hashed_password_2',
      user_type: 'client',
      hourly_rate: null,
      skills: JSON.stringify(['Project Management', 'Agile']),
      average_rating: null,
      profile_complete: true,
    },
    {
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      password: 'hashed_password_3',
      user_type: 'freelancer',
      hourly_rate: 60.00,
      skills: JSON.stringify(['Python', 'Django', 'Machine Learning']),
      average_rating: 4.7,
      profile_complete: true,
    },
    {
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      password: 'hashed_password_4',
      user_type: 'client',
      hourly_rate: null,
      skills: JSON.stringify(['Marketing', 'Sales']),
      average_rating: null,
      profile_complete: true,
    },
    {
      name: 'Eve Torres',
      email: 'eve.torres@example.com',
      password: 'hashed_password_5',
      user_type: 'freelancer',
      hourly_rate: 45.00,
      skills: JSON.stringify(['Design', 'UI/UX']),
      average_rating: 4.3,
      profile_complete: true,
    },
    {
      name: 'Frank Castle',
      email: 'frank.castle@example.com',
      password: 'hashed_password_6',
      user_type: 'client',
      hourly_rate: null,
      skills: JSON.stringify(['Security', 'Risk Management']),
      average_rating: null,
      profile_complete: true,
    },
    {
      name: 'Grace Hopper',
      email: 'grace.hopper@example.com',
      password: 'hashed_password_7',
      user_type: 'freelancer',
      hourly_rate: 70.00,
      skills: JSON.stringify(['COBOL', 'Mainframe']),
      average_rating: 4.9,
      profile_complete: true,
    },
    {
      name: 'Henry Ford',
      email: 'henry.ford@example.com',
      password: 'hashed_password_8',
      user_type: 'client',
      hourly_rate: null,
      skills: JSON.stringify(['Engineering', 'Manufacturing']),
      average_rating: null,
      profile_complete: true,
    },
    {
      name: 'Ivy League',
      email: 'ivy.league@example.com',
      password: 'hashed_password_9',
      user_type: 'freelancer',
      hourly_rate: 80.00,
      skills: JSON.stringify(['Education', 'Curriculum Development']),
      average_rating: 4.8,
      profile_complete: true,
    },
    {
      name: 'Jack Daniels',
      email: 'jack.daniels@example.com',
      password: 'hashed_password_10',
      user_type: 'client',
      hourly_rate: null,
      skills: JSON.stringify(['Beverage Development', 'Brand Management']),
      average_rating: null,
      profile_complete: true,
    }
  ]);
};
