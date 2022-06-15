import { EComputerBrands } from 'src/helpers/enums/computerBrands.enum';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { BranchOfficeModel } from '../branchOffice/branchOffice.entity';

@Entity()
export class ComputerModel {

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @ManyToOne(() => BranchOfficeModel,{
        onDelete:"CASCADE",
        nullable: false
    })
    @JoinColumn()
    branch: BranchOfficeModel

    @Column({
        length: 250
    })
    description: string;

    @Column()
    quantity: number;

    @Column()
    brand: EComputerBrands
};