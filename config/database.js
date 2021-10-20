const {
  db: { username, password, database, host },
} = require('./index');

// module.exports = {
//   development: {
//     username,
//     password,
//     database,
//     host,
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//   },
// };

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'postgres://nqsojyzluolvzi:37ad1ea64f15370ff1ca50b0ce32b9ff158f349d76fd618544db87bc07f5cd34@ec2-44-195-240-222.compute-1.amazonaws.com:5432/d6ceduh3a1e9lp',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};