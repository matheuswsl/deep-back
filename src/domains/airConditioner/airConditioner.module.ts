import { Module } from "@nestjs/common";
import { AirConditionerController } from "./airConditioner.controller";
import { AirConditionerService } from "./airConditioner.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirConditionerModel } from "src/models/airConditioner/airConditioner.entity";
import { AirConditionerRepository } from "src/models/airConditioner/airConditioner.respository";

@Module({
    imports:[
        TypeOrmModule.forFeature([AirConditionerModel])
    ],
    providers:[
        AirConditionerService,
        AirConditionerRepository
    ],
    controllers:[
        AirConditionerController
    ]
})
export class AirConditionerModule{};