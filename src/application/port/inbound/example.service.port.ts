import { Example } from "@/application/domain/model/example.model"

/**
 * Example Service Port.
 */
export interface ExampleServicePort {

    findAll(): Promise<Array<Example>>

    save(example: Example): Promise<void>
}