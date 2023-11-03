
import { User } from "@/domain/models/user.model";
import { ExampleAdapter } from "@/infrastrcuture/adapters/example.adapter";
import { AuthGuard, CookieUser } from "@lmes/bff-pingid";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBadRequestResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ExampleDto } from "../dtos/example.dto";
import { Example } from "@/domain/models/example.model";
import { toDtoList } from "../mappers/example.dto.mapper";
import { toModel } from "../mappers/example..model.mapper";


@ApiTags('RLSE Delivery Location list')
@Controller('delivery-location-list')
@UseGuards(AuthGuard)
export class ExampleController {

    constructor(private readonly adapter: ExampleAdapter) {}

    @Get()
    @ApiOkResponse({ description: 'example list found', type: ExampleDto, isArray: true })
    async findAll(): Promise<Array<ExampleDto>> {
        const list: Array<Example> = await this.adapter.findAll()
        return toDtoList(list)
    }

    @Post()
    @ApiNoContentResponse({description: 'example created'})
    @ApiBadRequestResponse({description: 'Bad format'})
    async save(@CookieUser() user: User, @Body() body: ExampleDto): Promise<void> {
        const model: Example = toModel(body)
        model.name = user.name
        await this.adapter.save(model)
    }

} 