import { ExampleAdapter } from "@/infrastructure-outbound/http/system-name/adapter/example.adapter";
import { Example } from "../domain/model/example.model";
import { Injectable } from "@nestjs/common";
import { ExampleServicePort } from "../port/inbound/example.service.port";

/**
 * ExampleServicePort implementation.
 */
@Injectable()
export class ExampleService implements ExampleServicePort {
    
    constructor(private readonly adapter: ExampleAdapter) {}
    
    findAll(): Promise<Example[]> {
        return this.adapter.findAll();
    }
    
    save(example: Example): Promise<void> {
        return this.adapter.save(example);
    }
    
}
