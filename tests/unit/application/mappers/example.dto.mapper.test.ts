import { ExampleDto } from "@/application/dtos/example.dto"
import { toDto, toDtoList } from "@/application/mappers/example.dto.mapper"
import { Example } from "@/domain/models/example.model"



describe('Example Dto mapper', ()=>{

    const example: Example = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }

    it('maps to dto', async ()=>{
         
        const dto = toDto(example)

        expect(dto).toBeInstanceOf(ExampleDto)
        expect(dto.name).toEqual(example.name)
        expect(dto.age).toEqual(example.age)
        expect(dto.dateOfBirth).toEqual(example.dateOfBirth)

    })

    it('maps to dto list', async ()=>{
        const dtos = toDtoList([example])
        expect(dtos.length).toEqual(1)
        expect(dtos[0]).toBeInstanceOf(ExampleDto)
        expect(dtos[0].name).toEqual(example.name)
        expect(dtos[0].age).toEqual(example.age)
        expect(dtos[0].dateOfBirth).toEqual(example.dateOfBirth)
    })

})