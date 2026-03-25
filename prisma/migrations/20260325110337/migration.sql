/*
  Warnings:

  - You are about to drop the column `valorInteira` on the `Ingresso` table. All the data in the column will be lost.
  - You are about to drop the column `valorMeia` on the `Ingresso` table. All the data in the column will be lost.
  - You are about to drop the column `valorTotal` on the `Ingresso` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessaoId,assento]` on the table `Ingresso` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cinemaId,numero]` on the table `Sala` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assento` to the `Ingresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorPago` to the `Ingresso` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoIngresso" AS ENUM ('INTEIRA', 'MEIA');

-- AlterTable
ALTER TABLE "Ingresso" DROP COLUMN "valorInteira",
DROP COLUMN "valorMeia",
DROP COLUMN "valorTotal",
ADD COLUMN     "assento" TEXT NOT NULL,
ADD COLUMN     "tipo" "TipoIngresso" NOT NULL DEFAULT 'INTEIRA',
ADD COLUMN     "valorPago" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sessao" ADD COLUMN     "precoInteira" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Ingresso_sessaoId_assento_key" ON "Ingresso"("sessaoId", "assento");

-- CreateIndex
CREATE UNIQUE INDEX "Sala_cinemaId_numero_key" ON "Sala"("cinemaId", "numero");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
