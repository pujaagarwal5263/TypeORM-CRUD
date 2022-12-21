import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Employee } from "./Employee"

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(()=>Employee, employee => employee.photos)
    @JoinColumn({name: "emp_id"})
    employee: Employee
}
