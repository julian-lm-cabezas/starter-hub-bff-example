import { Example } from "@/application/domain/model/example.model"
import { ExampleDto } from "@/infrastructure-inbound/dto/example.dto"
import { toDto, toDtoList } from "@/infrastructure-inbound/mapper/example.model.to.dto.mapper"

describe('Example Dto mapper', ()=>{

    const example: Example = {...new Example(), ...{
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }}

    it('maps to dto', async ()=>{
         
        const dto: ExampleDto = toDto(example)

        expect(dto).toBeInstanceOf(ExampleDto)
        expect(dto.name).toEqual(example.name)
        expect(dto.age).toEqual(example.age)
        expect(dto.dateOfBirth).toEqual(example.dateOfBirth)

    })

    it('maps to dto list', async ()=>{
        const dtos: Array<ExampleDto> = toDtoList([example])
        expect(dtos.length).toEqual(1)
        expect(dtos[0]).toBeInstanceOf(ExampleDto)
        expect(dtos[0].name).toEqual(example.name)
        expect(dtos[0].age).toEqual(example.age)
        expect(dtos[0].dateOfBirth).toEqual(example.dateOfBirth)
    })

})