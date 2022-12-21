import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Category } from "./Category"

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    question: string

    @Column()
    title: string
    
    @ManyToMany(()=>Category,category=> category.questions)
    @JoinTable({name:"ques_cat"})
    categories: Category[]
}
