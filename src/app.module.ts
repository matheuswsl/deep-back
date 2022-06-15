import { Module } from "@nestjs/common";
import { AirConditionerModule } from "./domains/airConditioner/airConditioner.module";
import { BranchOfficeModule } from "./domains/branchOffice/branchOffice.module";
import { ComputerModule } from "./domains/computers/computer.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormAsyncConfig } from "./configs/postgres.config";

@Module({
    imports:[
        AirConditionerModule,
        BranchOfficeModule,
        ComputerModule,
        TypeOrmModule.forRootAsync(typeormAsyncConfig)
    ]
})
export class AppModule{};