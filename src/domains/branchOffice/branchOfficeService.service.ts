import { Injectable } from "@nestjs/common";
import { IBranchOfficeModel } from "src/interfaces/branchOfficeModel.interface";
import { BranchOfficeRepository } from "src/models/branchOffice/branchOffice.repository";

@Injectable()
export class BranchOfficeService {
    
    constructor(
        private readonly _repository: BranchOfficeRepository
    ){};

    async getAll(){
        return this._repository.getAll();
    };

    async create(content: IBranchOfficeModel){
        return this._repository.create(content);
    };

    async deleteById(id: number){
        return this._repository.deleteById(id);
    };

    async updateById(id: number, content: IBranchOfficeModel){
        return this._repository.updateById(id, content);
    };
};