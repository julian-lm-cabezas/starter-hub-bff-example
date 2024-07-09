import { ExampleSystemNameDto } from "../dto/example.systemname.dto"
import { Example } from "@/application/domain/model/example.model"

/**
 * Maps dto to model.
 *
 * @param entity ExampleSystemNameDto
 * @returns Example
 */
export const toModel = (entity: ExampleSystemNameDto): Example => {
    const model: Example = new Example()
    model.name = entity.name
    model.age = entity.age
    model.dateOfBirth = new Date(entity.dateOfBirth)
    return model
}

/**
 * Maps dto array to model array.
 *
 * @param entities ExampleSystemNameDto array
 * @returns Example array
 */
export const toModelList = (entities: Array<ExampleSystemNameDto>): Array<Example> =>  
    entities.map((entity: ExampleSystemNameDto) => toModel(entity))