import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: ['dist/models/**/*.entity.js'],
    synchronize: false,
    logging: true,
    migrationsTableName: "custom_migration_table",
    migrations: ["dist/migrations/*.js"]
})