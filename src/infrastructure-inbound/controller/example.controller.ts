
import { Example } from "@/application/domain/model/example.model";
import { User } from "@/application/domain/model/user.model";
import { ExampleService } from "@/application/service/example.service";
import { AuthGuard, CookieUser } from "@lmes/bff-pingid";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBadRequestResponse, ApiNoContentResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ExampleDto } from "../dto/example.dto";
import { toModel } from "../mapper/example..model.mapper";
import { toDtoList } from "../mapper/example.dto.mapper";

/**
 * Example controller.
 */
@ApiTags('Examples')
@Controller('examples')
@UseGuards(AuthGuard)
export class ExampleController {

    constructor(private readonly service: ExampleService) {}

    @Get()
    @ApiOkResponse({ description: 'example list found', type: ExampleDto, isArray: true })
    async findAll(): Promise<Array<ExampleDto>> {
        const list: Array<Example> = await this.service.findAll()
        return toDtoList(list)
    }

    @Post()
    @ApiNoContentResponse({description: 'example created'})
    @ApiBadRequestResponse({description: 'Bad format'})
    async save(@CookieUser() user: User, @Body() body: ExampleDto): Promise<void> {
        const model: Example = toModel(body)
        model.name = user.name
        await this.service.save(model)
    }

} 