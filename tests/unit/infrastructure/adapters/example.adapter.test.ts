import { HttpService } from "@nestjs/axios"
jest.mock('../../../../src/domain/exceptions/http.client.exception', ()=>{
    return {
        exceptionHandler: jest.fn()
    }
})
import { exceptionHandler } from '@/domain/exceptions/http.client.exception'
import { ExampleAdapter } from "@/infrastrcuture/adapters/example.adapter"
import { Example } from '@/domain/models/example.model'

describe('Example Adapter', ()=>{
    let http: HttpService
    let client: ExampleAdapter
    const example: Example = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }
    beforeEach(()=>{
        http = new HttpService()
        client = new ExampleAdapter(http)
    })

    afterAll(()=> jest.resetAllMocks())

    it('gets list of examples', async ()=>{
        jest.spyOn(http.axiosRef,'get').mockResolvedValueOnce({data: [example]})
        const response = await client.findAll()
        expect(response).toBeDefined()
        expect(response.length).toEqual(1)
        expect(response[0].name).toEqual(example.name)
        expect(response[0].age).toEqual(example.age)
        expect(response[0].dateOfBirth).toEqual(example.dateOfBirth)
    })

    it('throws error on list of examples', async ()=>{
        jest.spyOn(http.axiosRef,'get').mockRejectedValueOnce({response: {status: 404}})
        try{
            await client.findAll()
        } catch(err){
            expect(exceptionHandler).toHaveBeenCalled()
        }
        
    })

    it('saves example', async ()=>{
        jest.spyOn(http.axiosRef,'post').mockResolvedValueOnce({status: 200, data: {}})
        const response = await client.save(example)
        expect(http.axiosRef.post).toHaveBeenCalledWith("/examples", example)
       
    })

    it('throws error on save example', async ()=>{
        jest.spyOn(http.axiosRef,'post').mockRejectedValueOnce({response: {status: 400}})
        try{
            await client.save(example)
        } catch(err){
            expect(exceptionHandler).toHaveBeenCalled()
        }
        
    })

})