-- AlterTable
ALTER TABLE "Filme" ADD COLUMN     "imagemUrl" TEXT;

-- AlterTable
ALTER TABLE "LancheCombo" ADD COLUMN     "imagemUrl" TEXT;

-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "colunas" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "fileiras" INTEGER NOT NULL DEFAULT 8;
