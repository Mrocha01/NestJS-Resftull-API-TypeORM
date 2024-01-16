const dotenv = require('dotenv');
const { DataSource } = require('typeorm');

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [`${__dirname}/migrations/**/*.ts`],
});

module.exports = dataSource;
