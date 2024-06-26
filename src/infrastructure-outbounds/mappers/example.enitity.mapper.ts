import { Example } from "@/application/models/example.model";
import { ExampleEntity } from "../entities/example.entity";

export const toEntity = (model: Example): ExampleEntity => {
    return {
        name: model.name,
        age: model.age,
        dateOfBirth: model.dateOfBirth
    };
}