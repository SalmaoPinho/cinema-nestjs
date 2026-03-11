/*
  Warnings:

  - You are about to drop the column `qtInteira` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `qtMeia` on the `Pedido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "qtInteira",
DROP COLUMN "qtMeia",
ADD COLUMN     "dataPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
