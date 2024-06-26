import { Example } from "@/application/models/example.model";
import { ExampleDto } from "../dtos/example.dto";

/**
 * Maps Example model to dto
 * 
 * @param model 
 * @returns ExampleDto
 */
export const toDto = (model: Example): ExampleDto => {
    return { ...new ExampleDto(), ...model } as ExampleDto
}

/**
 * Mpas list of models to dto
 * @param models 
 * @returns Array<ExampleDto>
 */
export const toDtoList = (models: Array<Example>): Array<ExampleDto> => 
    models.map((e: Example) => toDto(e))