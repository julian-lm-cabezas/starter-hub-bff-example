import { Example } from "../models/example.model";

/**
 * Example Service Port.
 */
export interface ExampleServicePort {

    findAll(): Promise<Array<Example>>

    save(example: Example): Promise<void>
}