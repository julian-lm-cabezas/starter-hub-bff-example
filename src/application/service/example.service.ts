import { ExampleAdapter } from "@/infrastructure-outbound/http/system-name/adapter/example.adapter";
import { Example } from "../domain/model/example.model";
import { Injectable } from "@nestjs/common";
import { ExampleUseCasePort } from "../port/inbound/example.use-case.port";

/**
 * ExampleServicePort implementation.
 */
@Injectable()
export class ExampleService implements ExampleUseCasePort {
    
    constructor(private readonly adapter: ExampleAdapter) {}
    
    findAll(): Promise<Example[]> {
        return this.adapter.findAll();
    }
    
    save(example: Example): Promise<void> {
        return this.adapter.save(example);
    }
    
}
