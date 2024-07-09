import { Example } from "@/application/domain/model/example.model"

/**
 * Example Infrastructure Port.
 */
export interface ExampleInfrastructurePort {

    findAll(): Promise<Array<Example>>

    save(example: Example): Promise<void>
}