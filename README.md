# 🌊 123Filmes - Modern Cinema Management

Uma plataforma completa e visualmente deslumbrante para gerenciamento de cinemas, construída com **NestJS**, **Prisma** e uma interface inspirada na estética **Frutiger Aero**.

![Aesthetic](https://frutigeraeroarchive.org/images/wallpapers/asadal_stock/asadal_stock_63.jpg)

## ✨ Destaques do Projeto

- **Estética Frutiger Aero Unificada**: Interface moderna com glassmorphism, gradientes vibrantes, ícones e visual "brilhante" orgânico implementado de forma consistente tanto na Web quanto no aplicativo Mobile.
- **Aplicativo Mobile (Expo)**: App completo em React Native contendo fluxos integrados de login (JWT), compras, mapa de assentos, bomboniere, painel de controle administrativo completo (CRUD) e persistência local com sincronização automática (**DB Sync**).
- **Sistema de Papéis (RBAC)**: Diferenciação completa entre **Administradores** e **Clientes** na Web e no Mobile.
- **Galeria Visual de Sessões**: Vitrine de filmes com posters, horários e informações de sala em tempo real.
- **PDV Interativo**: Sistema de ponto de venda com mapa de assentos dinâmico e suporte a lanches (Bomboniere).
- **Pronto para Raspberry Pi 5**: Configurado para cross-platform (Windows/Linux ARM64).

---

## 🚀 Tecnologias

- **Backend**: NestJS (Node.js framework)
- **Banco de Dados**: PostgreSQL + Prisma ORM
- **Frontend Web**: Vanilla HTML5/JS + Bootstrap 5
- **Frontend Mobile**: React Native & Expo SDK 54 + TypeScript
- **Iconografia**: Bootstrap Icons & Ionicons
- **Segurança & Sessão**: JWT (JSON Web Tokens), Bcrypt & AsyncStorage
- **Sincronização**: DB Sync (Mecanismo customizado de fila de rede offline)

---

## 🛠️ Configuração e Instalação

### 1. Requisitos
- Node.js 18+
- Docker & Docker Compose
- NPM

### 2. Instalação e Banco de Dados
```bash
# 1. Instalar dependências
npm install

# 2. Subir o banco PostgreSQL
docker compose up -d

# 3. Sincronizar o banco e gerar o client
npx prisma db push
npx prisma generate
```

### 3. Rodar o Projeto (Backend)
```bash
npm run start:dev
```

Acesse:
- **Página Inicial**: `http://localhost:3000`
- **Documentação API (Swagger)**: `http://localhost:3000/api/docs`

### 4. Rodar o Aplicativo Mobile (Expo)
```bash
# 1. Navegar até a pasta do app
cd mobile

# 2. Instalar dependências
npm install

# 3. Iniciar o servidor Expo (Use o app Expo Go para testar em seu celular)
npx expo start
```

---

## 👤 Contas de Teste

O sistema pré-configura dois perfis padrão para testes:

| Perfil | E-mail | Senha | Acesso |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@admin.com` | `admin123` | Total (Filmes, Salas, Gestão) |
| **Cliente** | `cliente@cliente.com` | `cliente123` | Consulta e Reservas |

---

## 🍓 Notas de Deploy (Raspberry Pi 5)

Este projeto foi otimizado para rodar em hardware ARM64:
- O `prisma/schema.prisma` já inclui `binaryTargets = ["native", "linux-arm64-openssl-3.0.x"]`.
- Ao instalar no Pi 5, certifique-se de usar `npm install` localmente no dispositivo para compilar os binários nativos.

---

## 📂 Estrutura de Pastas

- `/src`: Lógica backend (NestJS Modules)
- `/mobile`: Código-fonte do aplicativo móvel (React Native + Expo)
- `/frontend`: Interface web alternativa (Vite React SPA)
- `/public`: Interface web estática padrão
- `/prisma`: Definição de modelos e sementes do banco
- `/artifacts`: Documentação e logs de implementação

---

## 🖼️ Funcionalidades UI

1. **Dashboard Hero**: Atalhos inteligentes baseados no perfil do usuário.
2. **Mapa de Assentos**: Visualização em tempo real da ocupação das salas.
3. **Gestão de Sessões**: Galeria de "Destaques do Dia" com interatividade total.
4. **Resumo de Pedidos**: Histórico de compras com geração de recibos.

---

*Desenvolvido com foco em estética premium e performance local.*

