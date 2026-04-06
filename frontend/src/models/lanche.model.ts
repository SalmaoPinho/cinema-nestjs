import { z } from 'zod';

export interface ILanche {
    id?: number;
    nome: string;
    preco: number;
    imagemUrl?: string;
    cinemaId: number;
}

export const lancheSchema = z.object({
    id: z.number().optional(),
    nome: z.string()
        .min(1, 'O nome do lanche é obrigatório')
        .min(3, 'O nome deve ter no mínimo 3 caracteres'),
    preco: z.coerce.number()
        .min(0.01, 'O preço deve ser maior que zero'),
    imagemUrl: z.string()
        .url('A imagem deve ser uma URL válida').optional().nullable(),
    cinemaId: z.number().default(1)
});

export type LancheFormData = z.infer<typeof lancheSchema>;
