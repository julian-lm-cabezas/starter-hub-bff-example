import { ExampleAdapter } from "@/infrastructure-outbounds/adapters/example.adapter";
import { Example } from "../models/example.model";
import { ExampleServicePort } from "../ports/example.service.port";
import { Injectable } from "@nestjs/common";

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
