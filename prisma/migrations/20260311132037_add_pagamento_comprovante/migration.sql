-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "comprovanteUrl" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDENTE';
