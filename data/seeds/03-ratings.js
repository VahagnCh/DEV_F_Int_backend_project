/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Assuming that `payments` or other tables do not reference `ratings`

  // Truncate the ratings table
  await knex('ratings').truncate();

  // Insert seed entries for ratings
  await knex('ratings').insert([
    {
      project_id: 1, 
      rating: 5,
      comments: 'Outstanding work! Exceeded all expectations.',
      rating_date: knex.fn.now()
    },
    {
      project_id: 2, 
      rating: 4,
      comments: 'Great work, but a bit delayed.',
      rating_date: knex.fn.now()
    },
    {
      project_id: 3, 
      rating: 5,
      comments: 'Fantastic design, exactly what we needed!',
      rating_date: knex.fn.now()
    },
    {
      project_id: 4, 
      rating: 4,
      comments: 'Solid work, very innovative.',
      rating_date: knex.fn.now()
    },
    {
      project_id: 5, 
      rating: 5,
      comments: 'Exceptional course material, very well structured.',
      rating_date: knex.fn.now()
    }
  ]);
};
