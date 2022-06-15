import { Injectable } from "@nestjs/common";
import { BranchOfficeModel } from "./branchOffice.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBranchOfficeModel } from "src/interfaces/branchOfficeModel.interface";

@Injectable()
export class BranchOfficeRepository {
    constructor(
        @InjectRepository(BranchOfficeModel)
        private readonly _model: Repository<BranchOfficeModel>
    ){};

    async getAll(){
        return this._model.find();
    };

    async create(content: IBranchOfficeModel){
        return this._model.insert(content);
    }

    async deleteById(id: number){
        return this._model.delete({id:id})
    }

    async updateById(id: number, content: IBranchOfficeModel){
        return this._model.update({id},content);
    }
}