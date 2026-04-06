import { z } from 'zod';

export interface ISala {
    id?: number;
    numero: number;
    capacidade: number;
    fileiras: number;
    colunas: number;
    cinemaId: number;
}

export const salaSchema = z.object({
    id: z.number().optional(),
    numero: z.coerce.number()
        .min(1, 'O número da sala é obrigatório'),
    capacidade: z.coerce.number()
        .min(1, 'A capacidade deve ser no mínimo 1')
        .max(500, 'A capacidade máxima é 500 lugares'),
    fileiras: z.coerce.number().min(1).default(8),
    colunas: z.coerce.number().min(1).default(10),
    cinemaId: z.number().default(1)
});

export type SalaFormData = z.infer<typeof salaSchema>;
