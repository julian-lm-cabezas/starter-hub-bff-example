


import { ExampleController } from '@/infrastructure-inbound/controller/example.controller';
import { ExampleAdapter } from '@/infrastructure-outbound/http/system-name/adapter/example.adapter';
import { CoreModule } from '@/launcher/module/core.module';
import { ExampleModule } from '@/launcher/module/example.module';
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