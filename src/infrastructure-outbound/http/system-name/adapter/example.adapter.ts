import { Example } from "@/application/domain/model/example.model"
import { ExampleInfrastructurePort } from "@/application/port/outbound/example.infrastructure.port"
import { HttpService } from "@nestjs/axios"
import { Injectable } from "@nestjs/common"
import { ExampleSystemNameDto } from "../dto/example.dto"
import { toModelList } from "../mapper/example.dto.to.model.mapper"
import { exceptionHandler } from "@/application/exception/http.client.exception"
import { toDto } from "../mapper/example.model.to.dto.mapper"

/**
 * Example service port implementation.
 */
@Injectable()
export class ExampleAdapter implements ExampleInfrastructurePort {
    
    constructor(private readonly httpService: HttpService){}

    findAll = async (): Promise<Example[]> => {
        try{
            const {data} = await this.httpService.axiosRef.get<ExampleSystemNameDto[]>('/examples')
            return toModelList(data)
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

    save = async (example: Example): Promise<void> => {
        try{
            await this.httpService.axiosRef.post('/examples', toDto(example))
        }catch(err){
            throw exceptionHandler(err, 'Example')
        }
    }

}