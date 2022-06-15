import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IAirConditionerModel } from "src/interfaces/airConditionerModel.interface";
import { AirConditionerService } from "./airConditioner.service";

@Controller('air-conditioner')
export class AirConditionerController{

    constructor(
        private readonly _service: AirConditionerService
    ){};

    @Get()
    async getAll(){
        return this._service.getAll();
    };

    @Post()
    async create(
        @Body() body: IAirConditionerModel
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
        @Body() body: IAirConditionerModel
    ){
        return this._service.updateById(id, body);
    }
};