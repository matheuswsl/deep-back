import { Injectable } from "@nestjs/common";
import { IAirConditionerModel } from "src/interfaces/airConditionerModel.interface";
import { IService } from "src/interfaces/service.interface";
import { AirConditionerRepository } from "src/models/airConditioner/airConditioner.respository";

@Injectable()
export class AirConditionerService implements IService{

    constructor(
        private readonly _repository: AirConditionerRepository
    ){};

    async getAll(){
        return this._repository.getAll();
    };

    async create(content: IAirConditionerModel){
        return this._repository.create(content);
    };

    async deleteById(id: number){
        return this._repository.deleteById(id);
    };

    async updateById(id: number, content: IAirConditionerModel){
        return this._repository.updateById(id, content);
    };
};