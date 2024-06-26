import { Example } from "@/application/models/example.model";
import { ExampleEntity } from "../entities/example.entity";


export const toModel = (entity: ExampleEntity): Example => {
    const model: Example = new Example()
    model.name = entity.name
    model.age = entity.age
    model.dateOfBirth = new Date(entity.dateOfBirth)
    return model
}

export const toModelList = (entities: Array<ExampleEntity>): Array<Example> =>  
    entities.map((entity: ExampleEntity) => toModel(entity))