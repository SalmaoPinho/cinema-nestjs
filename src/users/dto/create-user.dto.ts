import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'O email do usuário', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'O nome do usuário', example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'A senha do usuário', minLength: 6, example: 'senha123' })
  @IsString()
  @MinLength(6)
  password: string;
}
