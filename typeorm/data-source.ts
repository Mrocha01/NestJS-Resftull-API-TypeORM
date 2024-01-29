import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from '../src/user/entity/user.entity';

config({ path: process.env.ENV === 'test' ? '.env.test' : '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  migrations: [`${__dirname}/migrations/**/*.ts`],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
