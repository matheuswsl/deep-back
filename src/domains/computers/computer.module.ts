import { Module } from "@nestjs/common";
import { ComputerController } from "./computer.controller";
import { ComputerService } from "./computer.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerModel } from "src/models/computers/computer.entity";
import { ComputerRepository } from "src/models/computers/computer.repository";

@Module({
    imports:[TypeOrmModule.forFeature([ComputerModel])],
    controllers:[ComputerController],
    providers:[
        ComputerService,
        ComputerRepository
    ]
})
export class ComputerModule{};