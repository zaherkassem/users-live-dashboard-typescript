/**
 * Create tables:  users, online_users.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

exports.up =  (knex:any) => {
  return knex.schema
    .createTable('users', (table:any) => {
      table.increments('id').primary().unsigned();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.boolean('isOnline').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(function () {
      return knex.schema.createTable('online_users', (table:any) => {
        table.increments('id').primary().unsigned();
        table.integer('user_id').unsigned().notNullable().references('users.id');
        table.string('user_ip');
        table.longtext('user_agent');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    });
};

/**
 * Drop tables: users, online_users.
 *
 * @param   {object} knex:any
 * @returns {Promise}
 */
exports.down =  (knex:any) =>  {
  return Promise.all([
    knex.schema.dropTableIfExists('online_users'),
    knex.schema.dropTableIfExists('users'),
  ]);
};
