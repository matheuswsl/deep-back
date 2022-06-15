import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async () =>{
        return {
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            entities: ['dist/models/**/*.entity.js'],
            synchronize: true,
            migrations: ['*-migrations{.ts,.js}'],
            migrationsTableName: "custom_migration_table",
            migrationsRun: false,
            cli:{
                migrationDir: 'src/migrations'
            },
            logging: true
        }
    }
};