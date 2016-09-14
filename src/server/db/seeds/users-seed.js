
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Jordon',
          last_name: 'Hoshor',
          role: 'Admin',
          email: 'jordonhoshor@galvanize.com',
          username: 'ho0dlum'
        }),
        knex('users').insert({
          first_name: 'Phil',
          last_name: 'Benz',
          email: 'philbenz@galvanize.com',
          username: 'phillyiet'
        }),
        knex('users').insert({
          first_name: 'Akiko',
          last_name: 'Okabe',
          email: 'akikookabe@galvanize.com',
          username: 'okabesan'
        }),
        knex('users').insert({
          first_name: 'Isaac',
          last_name: 'Collier',
          email: 'isaacjcollier@galvanize.com',
          username: 'chunkywombat'
        })
      ]);
    });
};
