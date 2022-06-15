import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IBranchOfficeModel } from "src/interfaces/branchOfficeModel.interface";
import { BranchOfficeService } from "./branchOfficeService.service";

@Controller('branch-office')
export class BranchOfficeController {

    constructor(
        private readonly _service: BranchOfficeService
    ){}

    @Get()
    async getAll(){
        return this._service.getAll();
    };

    @Post()
    async create(
        @Body() body: IBranchOfficeModel
    ){
        const resp = await this._service.create(body);
        return resp
    };

    @Delete(':id')
    async deleteById(
        @Param('id') id: number
    ){
        return this._service.deleteById(id);
    };

    @Put(':id')
    async updateById(
        @Param('id') id: number,
        @Body() body: IBranchOfficeModel
    ){
        return this._service.updateById(id, body);
    }
};