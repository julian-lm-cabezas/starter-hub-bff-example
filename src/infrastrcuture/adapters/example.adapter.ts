import { Example } from "@/domain/models/example.model";
import { ExampleServicePort } from "@/domain/ports/example.service.port";
import { Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios'
import { exceptionHandler } from "@/domain/exceptions/http.client.exception";

/**
 * Example service port implementation.
 */
@Injectable()
export class ExampleAdapter implements ExampleServicePort {
    
    constructor(private readonly httpService: HttpService){}

    findAll = async (): Promise<Example[]> => {
        try{
            const {data} = await this.httpService.axiosRef.get<Example[]>('/examples')
            return data
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

    save = async (example: Example): Promise<void> => {
        try{
            await this.httpService.axiosRef.post('/examples', example)
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

}