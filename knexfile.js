const databaseName = 'gelp';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://mrntsdnvyezner:wqdOLzVBAZPV34RVZ3gt7AZkgF@ec2-54-243-54-21.compute-1.amazonaws.com:5432/d9uf1c8i3t74bt`,
    port:3000,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
