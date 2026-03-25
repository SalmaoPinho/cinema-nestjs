import { IsNotEmpty, IsString, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
    @ApiProperty({ description: 'A rua/avenida', example: 'Av. Paulista' })
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({ description: 'O número do endereço', example: 1000 })
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty({ description: 'A cidade', example: 'São Paulo' })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({ description: 'O estado', example: 'SP' })
    @IsString()
    @IsNotEmpty()
    state: string;

    @ApiProperty({ description: 'O CEP', example: '01310-100' })
    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @ApiProperty({ description: 'O ID do usuário titular do endereço', example: 'uuid-aqui' })
    @IsUUID()
    @IsNotEmpty()
    userId: string;
}
