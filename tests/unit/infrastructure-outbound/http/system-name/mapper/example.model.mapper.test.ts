import { Example } from "@/application/domain/model/example.model"
import { ExampleSystemNameDto } from "@/infrastructure-outbound/http/system-name/dto/example.systemname.dto"
import { toModel, toModelList } from "@/infrastructure-outbound/http/system-name/mapper/example.model.mapper"


describe('Systemname Example model mapper', ()=>{

    const dto: ExampleSystemNameDto = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }
    
    it('maps to model', ()=>{
        
        const model: Example = toModel(dto)
        expect(model).toBeInstanceOf(Example)
        expect(model.name).toEqual(dto.name)
        expect(model.age).toEqual(dto.age)
        expect(model.dateOfBirth).toEqual(dto.dateOfBirth)
        
    })

    it('maps to model list', ()=>{
        const model: Array<Example> = toModelList([dto])
        expect(model.length).toEqual(1)
        expect(model[0]).toBeInstanceOf(Example)
        expect(model[0].name).toEqual(dto.name)
        expect(model[0].age).toEqual(dto.age)
        expect(model[0].dateOfBirth).toEqual(dto.dateOfBirth)
    })

})