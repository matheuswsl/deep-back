import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AirConditionerModel } from '../airConditioner/airConditioner.entity';

@Entity()
export class BranchOfficeModel {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column({
        length: 250
    })
    description: string;
};