-- AlterTable
ALTER TABLE "Ingresso" ADD COLUMN     "reembolsado" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ItemPedido" ADD COLUMN     "reembolsado" BOOLEAN NOT NULL DEFAULT false;
