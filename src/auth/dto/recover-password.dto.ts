import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RecoverPasswordDto {
    @ApiProperty({ example: 'cliente@cliente.com' })
    @IsEmail()
    email: string;
}
