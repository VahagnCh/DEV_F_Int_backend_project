/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Truncate the payments table
  await knex('payments').truncate();

  // Insert seed entries for payments
  await knex('payments').insert([
    {
      project_id: 1, // Assuming 'Website Redesign' project
      amount: 3000.00,
      payment_date: knex.fn.now(),
      payment_type: 'advance',
      status: 'completed'
    },
    {
      project_id: 1, // 'Website Redesign' project final payment
      amount: 3000.00,
      payment_date: knex.fn.now(),
      payment_type: 'final',
      status: 'completed'
    },
    {
      project_id: 2, 
      amount: 6000.00,
      payment_date: knex.fn.now(),
      payment_type: 'advance',
      status: 'pending'
    },
    {
      project_id: 3, 
      amount: 1800.00,
      payment_date: knex.fn.now(),
      payment_type: 'final',
      status: 'completed'
    },
    {
      project_id: 4, 
      amount: 10500.00,
      payment_date: knex.fn.now(),
      payment_type: 'advance',
      status: 'pending'
    },
    {
      project_id: 5, 
      amount: 10000.00,
      payment_date: knex.fn.now(),
      payment_type: 'advance',
      status: 'pending'
    }
  ]);
};
