import { ExampleController } from "@/infrastructure-inbounds/controllers/example.controller";
import { ExampleDto } from "@/infrastructure-inbounds/dtos/example.dto";
import { Example } from "@/application/domain/models/example.model";
import { User } from "@/application/domain/models/user.model";
import { CoreModule } from "@/infrastructure-outbounds/modules/core.module";
import { ExampleModule } from "@/infrastructure-outbounds/modules/example.module";
import { Test } from "@nestjs/testing";
import { ExampleService } from "@/application/services/example.service";


describe('Example controller', ()=>{
    let controller: ExampleController
    let adapter: ExampleService
    const example: Example = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({ imports: [ExampleModule, CoreModule]}).compile()
        adapter = moduleRef.get<ExampleService>(ExampleService);
        controller = moduleRef.get<ExampleController>(ExampleController);
    });
      
    afterEach(()=> jest.resetAllMocks()) 

    it('gets list of examples', async ()=>{
        jest.spyOn(adapter, 'findAll').mockResolvedValueOnce([example])
        const response = await controller.findAll()
        expect(response.length).toEqual(1)
        expect(response[0]).toBeInstanceOf(ExampleDto)
    })

    it('saves example', async ()=>{
        jest.spyOn(adapter, 'save').mockResolvedValueOnce()
        const user: User = new User()
        user.name = 'name'
        const result = new ExampleDto()
        result.name = user.name
        const response = await controller.save(user,new ExampleDto())
        
        expect(adapter.save).toHaveBeenCalled()
    })
})