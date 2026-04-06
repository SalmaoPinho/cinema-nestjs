import { z } from 'zod';

export interface IIngresso {
    id?: number;
    sessaoId: number;
    assento: string;
    tipo: 'INTEIRA' | 'MEIA';
    valorPago: number;
    createdAt?: string;
    updatedAt?: string;
}

export const ingressoSchema = z.object({
    id: z.number().optional(),
    sessaoId: z.coerce.number().min(1, 'A sessão é obrigatória'),
    assento: z.string().min(1, 'O assento é obrigatório'),
    tipo: z.enum(['INTEIRA', 'MEIA']).default('INTEIRA'),
    valorPago: z.number().min(0, 'O preço não pode ser negativo'),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional()
});

export type IngressoFormData = z.infer<typeof ingressoSchema>;
