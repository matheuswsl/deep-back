import { Module } from "@nestjs/common";
import { BranchOfficeRepository } from "src/models/branchOffice/branchOffice.repository";
import { BranchOfficeController } from "./branchOffice.controller";
import { BranchOfficeService } from "./branchOfficeService.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchOfficeModel } from "src/models/branchOffice/branchOffice.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([BranchOfficeModel])
    ],
    controllers:[BranchOfficeController],
    providers:[
        BranchOfficeService,
        BranchOfficeRepository
    ]
})
export class BranchOfficeModule{};