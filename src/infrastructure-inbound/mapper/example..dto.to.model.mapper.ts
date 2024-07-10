import { Example } from "@/application/domain/model/example.model"
import { ExampleDto } from "../dto/example.dto"


/**
 * Maps Example dto to model
 * 
 * @param dto 
 * @returns Example model
 */
export const toModel = (dto: ExampleDto): Example => {
    const model: Example = new Example()
    model.name = dto.name
    model.age = dto.age
    model.dateOfBirth = dto.dateOfBirth
    return model
}