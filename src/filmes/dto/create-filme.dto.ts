import { IsString, IsInt, IsEnum, IsDateString, IsOptional, Min } from 'class-validator';

export enum Genero {
    ACAO = 'ACAO',
    COMEDIA = 'COMEDIA',
    DRAMA = 'DRAMA',
    TERROR = 'TERROR',
    ROMANCE = 'ROMANCE',
    FICCAO_CIENTIFICA = 'FICCAO_CIENTIFICA',
    ANIMACAO = 'ANIMACAO',
    DOCUMENTARIO = 'DOCUMENTARIO',
}

export class CreateFilmeDto {
    @IsString()
    titulo: string;

    @IsString()
    sinopse: string;

    @IsString()
    classificacao: string;

    @IsInt()
    @Min(1)
    duracao: number;

    @IsString()
    elenco: string;

    @IsEnum(Genero)
    genero: Genero;

    @IsDateString()
    dataIniciaExibicao: string;

    @IsDateString()
    dataFinalExibicao: string;

    @IsOptional()
    @IsString()
    imagemUrl?: string;

    @IsInt()
    @IsOptional()
    cinemaId?: number;
}
