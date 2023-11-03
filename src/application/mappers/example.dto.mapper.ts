import { Example } from "@/domain/models/example.model";
import { ExampleDto } from "../dtos/example.dto";

/**
 * Maps Example model to dto
 * 
 * @param model 
 * @returns ExampleDto
 */
export const toDto = (model: Example): ExampleDto => {
    const dto: ExampleDto = new ExampleDto()

    dto.name = model.name
    dto.age = model.age
    dto.dateOfBirth = new Date(model.dateOfBirth)

    return dto
}

/**
 * Mpas list of models to dto
 * @param models 
 * @returns Array<ExampleDto>
 */
export const toDtoList = (models: Array<Example>): Array<ExampleDto> => 
    models.map((e: Example) => toDto(e))