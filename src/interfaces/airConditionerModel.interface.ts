import { BranchOfficeModel } from "src/models/branchOffice/branchOffice.entity";

export interface IAirConditionerModel {
    branch_id: BranchOfficeModel,
    description: string,
    quantity: number,
    btu: number
}