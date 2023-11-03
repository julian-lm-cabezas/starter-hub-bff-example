import { Example } from "@/domain/models/example.model";
import { ExampleDto } from "../dtos/example.dto";

/**
 * Maps Example dto to model
 * 
 * @param dto 
 * @returns Example model
 */
export const toModel = (dto: ExampleDto): Example => {
    return {
        name: dto.name,
        age: dto.age,
        dateOfBirth: new Date(dto.dateOfBirth)
    }
}