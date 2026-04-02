# Cinema NestJS API

API REST para gerenciamento de cinema com NestJS, Prisma e PostgreSQL.

## Stack

- NestJS
- Prisma ORM
- PostgreSQL (Docker)
- Swagger (OpenAPI)
- Class Validator

## O que cada stack faz

- NestJS: framework backend que organiza a API em modulos, controllers e services, com injecao de dependencia e estrutura escalavel.
- Prisma ORM: camada de acesso ao banco com tipagem forte, CRUD facil e gerenciamento de migracoes.
- PostgreSQL (Docker): banco de dados relacional onde os dados ficam persistidos; o Docker simplifica subir e manter o ambiente.
- Swagger (OpenAPI): documentacao interativa da API para visualizar e testar endpoints no navegador.
- class-validator: valida os DTOs de entrada para garantir dados corretos antes de chegar na regra de negocio.
- class-transformer: transforma payloads em objetos tipados e ajuda na serializacao/deserializacao dos dados.

## Requisitos

- Node.js 18+
- npm
- Docker e Docker Compose

## Configuracao do ambiente

1. Instalar dependencias:

```bash
npm install
```

2. Subir o banco PostgreSQL via Docker:

```bash
docker compose up -d
```

3. Confirmar se o container subiu:

```bash
docker ps
```

Container esperado: `cinema-postgres` na porta `5432`.

4. Verificar `DATABASE_URL` no arquivo `.env`:

```env
DATABASE_URL="postgresql://cinema:cinema123@localhost:5432/cinema_db?schema=public"
```

## Prisma

1. Aplicar migracoes:

```bash
npx prisma migrate dev
```

2. (Opcional) Abrir Prisma Studio:

```bash
npx prisma studio
```

## Executar a API

Modo desenvolvimento:

```bash
npm run start:dev
```

A API sobe por padrao em:

- `http://localhost:3000`

## Acessar Swagger e pagina HTML

Com a API rodando:

- Swagger: `http://localhost:3000/api/docs`
- Pagina publica: `http://localhost:3000/index.html`

Observacao: o projeto ja esta configurado para servir arquivos estaticos da pasta `public` via `src/main.ts`.

## Fluxo rapido (comandos em ordem)

```bash
npm install
docker compose up -d
npx prisma migrate dev
npm run start:dev
```

Depois acesse:

- `http://localhost:3000/api/docs`
- `http://localhost:3000/index.html`

## Scripts uteis

```bash
npm run start
npm run start:dev
npm run start:prod
npm run build
npm run test
npm run test:e2e
npm run lint
```

## Troubleshooting

### Erro: "The table public.Profile does not exist"

Esse erro indica que o Prisma Client tentou consultar a tabela `Profile`, mas ela nao existe no banco conectado.

Checklist:

1. O model `Profile` esta no `prisma/schema.prisma`.
2. O banco correto esta no `.env` (`DATABASE_URL`).
3. A migracao foi aplicada no mesmo banco:

```bash
npx prisma migrate dev
```

4. Se o schema mudou e ficou inconsistente, resetar (apaga dados locais):

```bash
npx prisma migrate reset
```

5. Regenerar client, se necessario:

```bash
npx prisma generate
```

### Docker esta rodando, mas nao abre a API

- Docker sobe apenas o banco. A API NestJS precisa estar rodando com `npm run start:dev`.
- Verifique se a porta 3000 esta livre.

## Estrutura relevante

- `prisma/schema.prisma`: modelos e relacoes
- `src/main.ts`: bootstrap, Swagger e arquivos estaticos
- `public/index.html`: pagina publica
- `docker-compose.yml`: servico do PostgreSQL
