import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Employee } from '../entity/Employee'
import { Photo } from '../entity/Photo'
import { Category } from '../entity/Category'
import { Question } from '../entity/Question'

export class RelController{
    private empRepository = AppDataSource.getRepository(Employee)
    private photoRepository = AppDataSource.getRepository(Photo)
    private catRepository = AppDataSource.getRepository(Category)
    private quesRepository = AppDataSource.getRepository(Question)

    async getEmployee(request: Request, response: Response, next: NextFunction) {
        return this.empRepository.find()
    }

    async manyToMany(request: Request, response: Response, next: NextFunction){
        // MANY TO MANY ------- && -------
        const c1=new Category();
        c1.category="sports"
        await this.catRepository.save(c1);

        const c2=new Category();
        c2.category="travel"
        await this.catRepository.save(c2);
        
        const ques=new Question();
        ques.title="first question"
        ques.question="What is best sports in Snow?"
        ques.categories=[c1,c2];
        await this.quesRepository.save(ques);

        return this.quesRepository.find({
            relations: {
                categories: true,
            },
        })
    }

    async oneToMany(request: Request, response: Response, next: NextFunction) {

    // ONE TO MANY ------ && ------- MANY TO ONE   

        const p1=new Photo();
        p1.url="demo2.jpg"
       // p1.employee=employee
        await this.photoRepository.save(p1);

        const p2=new Photo();
        p2.url="image2.jpg"
       // p2.employee=employee
        await this.photoRepository.save(p2);

        const employee=new Employee();
        employee.name="sandeep2"
        employee.photos=[p1,p2];
        await this.empRepository.save(employee)
       
        return this.empRepository.find({
            relations: {
                photos: true,
            },
        })
    }
  
}
