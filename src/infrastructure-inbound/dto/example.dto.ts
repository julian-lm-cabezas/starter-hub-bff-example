import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from 'class-validator'

export class ExampleDto {

    @ApiProperty() 
    @IsString({message: 'name must be string value'})
    name: string 

    @ApiProperty() 
    @IsNumber({ allowNaN: false },{ message: 'age must be number value'})
    age: number 

    @ApiProperty()
    dateOfBirth: Date
}