import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ComputerModel } from "./computer.entity";
import { Repository } from 'typeorm';
import { IComputerModel } from "src/interfaces/computerModel.interface";

@Injectable()
export class ComputerRepository {
    constructor(
        @InjectRepository(ComputerModel)
        private readonly _model: Repository<ComputerModel>
    ){};

    async getAll(){
        return this._model
                .createQueryBuilder("computer_model")
                .innerJoinAndSelect("computer_model.branch", "branch")
                .getMany();
    };

    async create(content: IComputerModel){
        return this._model.insert(content);
    }

    async deleteById(id: number){
        return this._model.delete({id:id})
    }

    async updateById(id: number, content: IComputerModel){
        return this._model.update({id},content);
    }
}