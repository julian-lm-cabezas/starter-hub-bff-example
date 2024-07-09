import { Example } from "@/application/domain/model/example.model"
import { ExampleService } from "@/application/service/example.service"
import { ExampleAdapter } from "@/infrastructure-outbound/http/system-name/adapter/example.adapter"
import { HttpService } from "@nestjs/axios"



describe('Example Service', ()=>{
    let service: ExampleService
    let adapter: ExampleAdapter
    
    const example: Example = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }

    beforeEach(()=>{
        adapter = new ExampleAdapter(new HttpService())
        service = new ExampleService(adapter)
    })

    afterAll(()=> jest.resetAllMocks())

    it('gets list of examples', async ()=>{
        jest.spyOn(adapter,'findAll').mockResolvedValueOnce([example])
        const response: Array<Example> = await service.findAll()
        expect(response).toBeDefined()
        expect(response.length).toEqual(1)
    })

    it('saves example', async ()=>{
        jest.spyOn(adapter,'save').mockResolvedValueOnce()
        await service.save(example)
        expect(adapter.save).toHaveBeenCalledWith(example)
    })

})