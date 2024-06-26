import { ExampleAdapter } from "@/infrastrcuture-outbounds/adapters/example.adapter";
import { Example } from "../models/example.model";
import { ExampleServicePort } from "../ports/example.service.port";


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

function Injectable(): (target: typeof ExampleService) => void | typeof ExampleService {
    throw new Error("Function not implemented.");
}
