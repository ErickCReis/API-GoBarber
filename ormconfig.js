const postgresEntities = process.env.TYPEORM_IN_PRODUCTION
  ? ['./dist/modules/**/infra/typeorm/entities/*.js']
  : ['./src/modules/**/infra/typeorm/entities/*.ts'];

const postgresMigrations = process.env.TYPEORM_IN_PRODUCTION
  ? ['./dist/shared/infra/typeorm/migrations/*.js']
  : ['./src/shared/infra/typeorm/migrations/*.ts'];

const postgresMigrationsDir = process.env.TYPEORM_IN_PRODUCTION
  ? './dist/shared/infra/typeorm/migrations'
  : './src/shared/infra/typeorm/migrations';

const mongoEntities = process.env.TYPEORM_IN_PRODUCTION
  ? ['./dist/modules/**/infra/typeorm/schemas/*.js']
  : ['./src/modules/**/infra/typeorm/schemas/*.ts'];

module.exports = [
 {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: postgresEntities,
  migrations: postgresMigrations,
  cli: {
    'migrationsDir': postgresMigrationsDir
  }
 },
 {
  name: 'mongo',
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  useUnifiedTopology: true,
  entities: mongoEntities
 }
]
