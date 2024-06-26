import { Example } from "@/application/models/example.model";
import { ExampleServicePort } from "@/application/ports/example.service.port";
import { Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios'
import { exceptionHandler } from "@/application/exceptions/http.client.exception";
import { ExampleEntity } from "../entities/example.entity";
import { toModelList } from "../mappers/example.model.mapper";
import { toEntity } from "../mappers/example.enitity.mapper";

/**
 * Example service port implementation.
 */
@Injectable()
export class ExampleAdapter implements ExampleServicePort {
    
    constructor(private readonly httpService: HttpService){}

    findAll = async (): Promise<Example[]> => {
        try{
            const {data} = await this.httpService.axiosRef.get<ExampleEntity[]>('/examples')
            return toModelList(data)
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

    save = async (example: Example): Promise<void> => {
        try{
            await this.httpService.axiosRef.post('/examples', toEntity(example))
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

}