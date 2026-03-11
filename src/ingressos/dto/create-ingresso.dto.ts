import { IsInt, IsString, IsEnum } from 'class-validator';

export enum TipoIngresso {
    INTEIRA = 'INTEIRA',
    MEIA = 'MEIA',
}

export class CreateIngressoDto {
    @IsInt()
    sessaoId: number;

    @IsString()
    assento: string;

    @IsEnum(TipoIngresso)
    tipo: TipoIngresso;
}
