import { Example } from "@/application/models/example.model";
import { ExampleDto } from "../dtos/example.dto";

/**
 * Maps Example dto to model
 * 
 * @param dto 
 * @returns Example model
 */
export const toModel = (dto: ExampleDto): Example => {
    return {... new Example(), ...dto} as Example
}