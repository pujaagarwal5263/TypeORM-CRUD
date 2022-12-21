import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { Product } from '../entity/Product'


export class UserController {

    private userRepository = AppDataSource.getRepository(User)
    private prodRepository = AppDataSource.getRepository(Product)

    async all(request: Request, response: Response, next: NextFunction) {

        return this.userRepository.find({
            relations: {
                prod: true,
            },
        })
    }

    async oneToOne(request: Request, response: Response, next: NextFunction){

        // ONE TO ONE -------- && -----------
        const data=request.body;
        
        const product = new Product()
        product.name = data.prod.name
        product.price = data.prod.price
        await this.prodRepository.save(product)

        const user = new User()
        user.firstName = data.firstName
        user.lastName = data.lastName
        user.age=data.age
        user.prod=product
        await this.userRepository.save(user)

        return this.userRepository.find({
            relations: {
                prod: true,
            },
        })
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        

        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age, prod_id } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age,
            prod_id
        })

        return this.userRepository.save(user)
    }


    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}