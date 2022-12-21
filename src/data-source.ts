import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Employee } from "./entity/Employee"
import { Photo } from "./entity/Photo"
import { Product } from "./entity/Product"
import { Question } from "./entity/Question"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Puja@123",
    database: "social_network",
    synchronize: true,
    logging: false,
    entities: [User,Product,Employee,Photo, Question, Category],
    migrations: ["./migration/*.ts"],
    subscribers: [],
})
