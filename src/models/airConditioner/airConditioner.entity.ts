import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { BranchOfficeModel } from '../branchOffice/branchOffice.entity';

@Entity()
export class AirConditionerModel {
    @PrimaryGeneratedColumn('uuid')
    id: number;  

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
    btu: number;
}