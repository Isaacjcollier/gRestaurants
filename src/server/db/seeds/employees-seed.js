
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({
          name: 'Will Billiams',
          role: 'Head Chef'
        }),
        knex('employees').insert({
          name: 'Frank Sinatra',
          role: 'Entertainer'
        }),
        knex('employees').insert({
          name: 'Etta James',
          role: 'Hostess'
        }),
        knex('employees').insert({
          name: 'Scary Dan',
          role: 'Dishwasher'
        }),
        knex('employees').insert({
          name: 'Fred Felon',
          role: 'Line Cook'
        }),
        knex('employees').insert({
          name: 'Toshiro Mifune',
          role: 'Bouncer'
        })
      ]);
    });
};
