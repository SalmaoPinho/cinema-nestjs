-- DropForeignKey
ALTER TABLE "Ingresso" DROP CONSTRAINT "Ingresso_sessaoId_fkey";

-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_cinemaId_fkey";

-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_filmeId_fkey";

-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_salaId_fkey";

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
