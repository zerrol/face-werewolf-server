export const databaseConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'adminadmin',
  database: 'test1',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}