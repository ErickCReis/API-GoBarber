const typeormConfigs = process.env.TYPEORM_IN_PRODUCTION
  ? {
      postgresEntities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
      postgresMigrations: ['./dist/shared/infra/typeorm/migrations/*.js'],
      postgresMigrationsDir: './dist/shared/infra/typeorm/migrations',
      mongoEntities: ['./dist/modules/**/infra/typeorm/schemas/*.js']
    }
  : {
      postgresEntities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
      postgresMigrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
      postgresMigrationsDir: './src/shared/infra/typeorm/migrations',
      mongoEntities: ['./src/modules/**/infra/typeorm/schemas/*.ts']
    };

module.exports = [
 {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: typeormConfigs.postgresEntities,
  migrations: typeormConfigs.postgresMigrations,
  cli: {
    'migrationsDir': typeormConfigs.postgresMigrationsDir
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
  entities: typeormConfigs.mongoEntities
 }
]
