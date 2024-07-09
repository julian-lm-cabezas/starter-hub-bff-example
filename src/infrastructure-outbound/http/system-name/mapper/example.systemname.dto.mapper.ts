import { Example } from "@/application/domain/model/example.model";
import { ExampleSystemNameDto } from "../dto/example.systemname.dto";

/**
 * Maps model to dto.
 *
 * @param model Example
 * @returns ExampleSystemNameDto
 */
export const toEntity = (model: Example): ExampleSystemNameDto => {
    return {
        name: model.name,
        age: model.age,
        dateOfBirth: model.dateOfBirth
    };
}