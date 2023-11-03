import { ExampleDto } from "@/application/dtos/example.dto"
import { toModel } from "@/application/mappers/example..model.mapper"

describe('Example model mapper', ()=>{

    const dto = new ExampleDto()
    dto.name = 'name'
    dto.age = 10
    dto.dateOfBirth = new Date(2024, 1, 1)
    it('maps to model', ()=>{
        
        const model = toModel(dto)
        expect(model.name).toEqual(dto.name)
        expect(model.age).toEqual(dto.age)
        expect(model.dateOfBirth).toEqual(dto.dateOfBirth)
        
    })

})