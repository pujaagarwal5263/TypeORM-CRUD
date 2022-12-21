import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Product } from '../entity/Product'
import {User} from "../entity/User"


export class ProdController{
    private prodRepository = AppDataSource.getRepository(Product)
    private userRepository = AppDataSource.getRepository(User)

    async getProducts(request: Request, response: Response, next: NextFunction) {
        return this.prodRepository.find()
    }

    async saveProd(request: Request, response: Response, next: NextFunction) {
        const { name, price } = request.body;

        const product = Object.assign(new Product(), {
           name, price
        })
        return this.prodRepository.save(product)


    }

    async getById(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        

        const product = await this.prodRepository.findOne({
            where: { id }
        })

        if (!product) {
            return "Product does not exist"
        }
        return product
    }
    
    async deleteProd(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let prodToRemove = await this.prodRepository.findOneBy({ id })

        if (!prodToRemove) {
            return "this product not exist"
        }

        await this.prodRepository.remove(prodToRemove)

        return response.status(200).json({prod: prodToRemove,msg: "product has been removed"})
    }
}
