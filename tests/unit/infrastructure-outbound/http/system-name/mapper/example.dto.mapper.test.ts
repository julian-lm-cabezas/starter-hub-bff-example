import { Example } from "@/application/domain/model/example.model"
import { ExampleSystemNameDto } from "@/infrastructure-outbound/http/system-name/dto/example.systemname.dto"
import { toDto } from "@/infrastructure-outbound/http/system-name/mapper/example.dto.mapper"

describe('Systemname Example Dto mapper', ()=>{

    const example: Example = {
        name: 'name',
        age: 10,
        dateOfBirth: new Date(2024, 1, 1)
    }

    it('maps to dto', async ()=>{
         
        const dto: ExampleSystemNameDto = toDto(example)
        expect(dto.name).toEqual(example.name)
        expect(dto.age).toEqual(example.age)
        expect(dto.dateOfBirth).toEqual(example.dateOfBirth)

    })

})