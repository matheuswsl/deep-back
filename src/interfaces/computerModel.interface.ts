import { EComputerBrands } from "src/helpers/enums/computerBrands.enum";
import { BranchOfficeModel } from "src/models/branchOffice/branchOffice.entity";

export interface IComputerModel {
    branch_id: BranchOfficeModel,
    description: string,
    quantity: number,
    brand: EComputerBrands
};