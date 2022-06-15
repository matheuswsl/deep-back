import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IComputerModel } from "src/interfaces/computerModel.interface";
import { ComputerService } from "./computer.service";

@Controller('computer')
export class ComputerController {

    constructor(
        private readonly _service: ComputerService
    ){};

    @Get()
    async getAll(){
        return this._service.getAll();
    };

    @Post()
    async create(
        @Body() body: IComputerModel
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
        @Body() body: IComputerModel
    ){
        return this._service.updateById(id, body);
    }
};