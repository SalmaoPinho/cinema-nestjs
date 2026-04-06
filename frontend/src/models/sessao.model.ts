import { z } from 'zod';

export interface ISessao {
    id?: number;
    filmeId: number;
    salaId: number;
    horarioExibicao: string;
    precoInteira: number;
    cinemaId: number;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}

export const sessaoSchema = z.object({
    id: z.number().optional(),
    filmeId: z.coerce.number().min(1, 'O filme é obrigatório'),
    salaId: z.coerce.number().min(1, 'A sala é obrigatória'),
    horarioExibicao: z.string().min(1, 'A data e hora são obrigatórias'),
    precoInteira: z.coerce.number().min(0, 'O preço não pode ser negativo'),
    cinemaId: z.number().default(1),
    status: z.string().default('DISPONIVEL'),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional()
});

export type SessaoFormData = z.infer<typeof sessaoSchema>;
