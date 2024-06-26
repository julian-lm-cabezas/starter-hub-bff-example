

import { ExampleController } from '@/infrastructure-inbounds/controllers/example.controller';
import { CoreModule } from '@/infrastructure-outbounds/modules/core.module';
import { ExampleModule } from '@/infrastructure-outbounds/modules/example.module';
import { ExampleAdapter } from '@/infrastrcuture-outbounds/adapters/example.adapter';
import { Test } from '@nestjs/testing';


describe('Example module', ()=>{

    afterAll(()=> jest.resetAllMocks())

    it('should compile module', async()=>{
        const module = await Test.createTestingModule({ imports: [ExampleModule, CoreModule] }).compile()

        expect(module).toBeDefined()
        expect(module.get(ExampleController)).toBeInstanceOf(ExampleController)
        expect(module.get(ExampleAdapter)).toBeInstanceOf(ExampleAdapter)
    })
})