import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateLancheDto {
    @IsString()
    nome: string;

    @IsString()
    descricao: string;

    @IsNumber()
    @Min(0)
    preco: number;

    @IsOptional()
    @IsString()
    imagemUrl?: string;
}
