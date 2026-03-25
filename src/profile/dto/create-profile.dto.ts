import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
    @ApiProperty({ description: 'O nome do perfil', example: 'ADMIN' })
    @IsString()
    @IsNotEmpty()
    name: string;
}
