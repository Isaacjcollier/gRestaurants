//restaurants seed file info
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({
          // bbq
          name: 'Bubba\'s',
          street: '800 Deleware',
          city: 'Denver',
          state: 'Colorado',
          zip: '80200',
          cuisine: 'bbq',
          description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          picture_url: '/images/bbq.jpg'
        }),
        knex('restaurants').insert({
          // fine-dining
          name: 'chez maison',
          street: '400 Cole St.',
          city: 'San Francisco',
          state: 'California',
          zip: '9491',
          cuisine: 'Fine Dining',
          description: 'House of the house, like a boss.',
          picture_url: '/images/fine-dining.jpeg'
        }),
        knex('restaurants').insert({
          // italian
          name: 'Mario\'s House of Lasagna',
          street: '112 broadway',
          city: 'New York City',
          state: 'New York',
          zip: '01012',
          cuisine: 'Italian',
          description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          picture_url: '/images/italian.jpg'
        }),
        knex('restaurants').insert({
          // mexican
          name: 'Rositta\'s',
          street: '626 Maple St.',
          city: 'Seattle',
          state: 'Washington',
          zip: '91123',
          cuisine: 'Mexican',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          picture_url: '/images/mexican.jpeg'
        }),
        knex('restaurants').insert({
          // mongolian
          name: 'Hu-Hot',
          street: '142 Chestnut rd',
          city: 'Colorado Springs',
          state: 'Colorado',
          zip: '80900',
          cuisine: 'Mongolian',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          picture_url: '/images/mongolian.jpeg'
        }),
        knex('restaurants').insert({
          // American
          name: 'Cherry Cricket',
          street: '100 University',
          city: 'Denver',
          state: 'Colorado',
          zip: '80203',
          cuisine: 'American',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          picture_url: '/images/american.jpg'
        })
      ]);
    });
};
