import { Injectable } from "@nestjs/common";
import { IComputerModel } from "src/interfaces/computerModel.interface";
import { ComputerRepository } from "src/models/computers/computer.repository";

@Injectable()
export class ComputerService{

    constructor(
        private readonly _repository: ComputerRepository
    ){};

    async getAll(){
        return this._repository.getAll();
    };

    async create(content: IComputerModel){
        return this._repository.create(content);
    };

    async deleteById(id: number){
        return this._repository.deleteById(id);
    };

    async updateById(id: number, content: IComputerModel){
        return this._repository.updateById(id, content);
    };
};