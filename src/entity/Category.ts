import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Question } from "./Question"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string

    @ManyToMany(()=>Question,question=> question.categories)
    questions: Question[]
}
