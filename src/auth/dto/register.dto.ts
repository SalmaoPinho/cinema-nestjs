import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({ example: 'cliente@cliente.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Cliente Teste' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'cliente123', minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string;
}
