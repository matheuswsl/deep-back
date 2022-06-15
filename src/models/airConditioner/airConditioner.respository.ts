import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { IAirConditionerModel } from "src/interfaces/airConditionerModel.interface";
import { Repository } from 'typeorm';
import { AirConditionerModel } from "./airConditioner.entity";

@Injectable()
export class AirConditionerRepository {
    constructor(
        @InjectRepository(AirConditionerModel)
        private readonly _model: Repository<AirConditionerModel>
    ){};

    async getAll(){
        return this._model.createQueryBuilder("air_conditioner_model")
                .innerJoinAndSelect("air_conditioner_model.branch", "branch")
                .getMany();
    };

    async create(content: IAirConditionerModel){
        return this._model.insert(content);
    }

    async deleteById(id: number){
        return this._model.delete({id:id})
    }

    async updateById(id: number, content: IAirConditionerModel){
        return this._model.update({id},content);
    }
}