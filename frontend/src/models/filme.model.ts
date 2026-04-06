import { z } from 'zod';

export interface IFilme {
    id?: number;
    titulo: string;
    sinopse: string;
    genero: 'ACAO' | 'DRAMA' | 'FICCAO_CIENTIFICA' | 'COMEDIA' | 'TERROR' | 'ROMANCE' | 'ANIMACAO' | 'DOCUMENTARIO';
    classificacao: string;
    duracao: number;
    elenco: string;
    dataIniciaExibicao: string;
    dataFinalExibicao: string;
    imagemUrl?: string;
    cinemaId?: number;
}

export const filmeSchema = z.object({
    id: z.number().optional(),
    titulo: z.string()
        .min(1, 'O título é obrigatório')
        .min(3, 'O título deve ter no mínimo 3 caracteres'),
    sinopse: z.string()
        .min(10, 'A sinopse deve ter no mínimo 10 caracteres'),
    genero: z.enum(['ACAO', 'DRAMA', 'FICCAO_CIENTIFICA', 'COMEDIA', 'TERROR', 'ROMANCE', 'ANIMACAO', 'DOCUMENTARIO']),
    classificacao: z.string().min(1, 'A classificação é obrigatória'),
    duracao: z.number()
        .min(30, 'O filme deve ter no mínimo 30 minutos')
        .max(300, 'O filme não pode ter mais de 300 minutos'),
    elenco: z.string().min(1, 'O elenco é obrigatório'),
    dataIniciaExibicao: z.string().min(1, 'A data de início é obrigatória'),
    dataFinalExibicao: z.string().min(1, 'A data de fim é obrigatória'),
    imagemUrl: z.string().url('URL da imagem inválida').optional().or(z.literal('')),
    cinemaId: z.number().optional().default(1)
});

export type FilmeFormData = z.infer<typeof filmeSchema>;
