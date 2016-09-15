
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({
          name: 'Will Billiams',
          role: 'Head Chef',
          restaurant_id: 1
        }),
        knex('employees').insert({
          name: 'Frank Sinatra',
          role: 'Entertainer',
          restaurant_id: 2
        }),
        knex('employees').insert({
          name: 'Etta James',
          role: 'Hostess',
          restaurant_id: 3
        }),
        knex('employees').insert({
          name: 'Scary Dan',
          role: 'Dishwasher',
          restaurant_id: 4
        }),
        knex('employees').insert({
          name: 'Fred Felon',
          role: 'Line Cook',
          restaurant_id: 5
        }),
        knex('employees').insert({
          name: 'Toshiro Mifune',
          role: 'Bouncer',
          restaurant_id: 6
        })
      ]);
    });
};
