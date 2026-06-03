
### 1. Login, Registrar Usuário e Recuperar Senha
*   **Login**: Implementado na tela [LoginScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/LoginScreen.tsx). Autentica diretamente com o endpoint `POST /api/auth/login` do NestJS, suportando contas padrão de teste e salvando a sessão do usuário.
*   **Registrar**: Implementado na tela [RegisterScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/RegisterScreen.tsx). Conecta-se à rota pública `POST /api/auth/register` criada no backend para registrar o usuário em tempo real.
*   **Recuperar Senha**: Implementado na tela [ForgotPasswordScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/ForgotPasswordScreen.tsx). Conecta-se a `POST /api/auth/recover-password`, exibindo uma senha temporária gerada de teste de forma interativa.

### 2. Listar Filmes
*   Implementado na tela [MovieListScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/MovieListScreen.tsx). Busca o catálogo de filmes ativos do servidor, exibe os posters e títulos, e conta com filtros de pesquisa por texto e carrossel de categorias de gênero (Ação, Comédia, Drama, etc.).

### 3. Listar Sessões
*   Implementado na tela [MovieDetailScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/MovieDetailScreen.tsx). Mostra a sinopse e detalhes do filme selecionado e lista dinamicamente todas as sessões cadastradas no servidor para aquele filme, exibindo sala, horários e preço base.

### 4. Fluxo Completo de Compra de Ingressos
*   **Escolher Sessão**: Selecionável diretamente na listagem de detalhes do filme.
*   **Escolher Assento**: Implementado na tela [SeatSelectionScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/SeatSelectionScreen.tsx). Apresenta um mapa visual interativo em grade. Assentos já vendidos são bloqueados (ficam vermelhos e inativos), e o usuário pode selecionar assentos livres e alternar o tipo (Inteira/Meia) atualizando o subtotal em tempo real.
*   **Combo de Lanches**: Implementado na tela [SnackSelectionScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/SnackSelectionScreen.tsx). Puxa os lanches da bomboniere do servidor e exibe contadores dinâmicos para incrementar combos e bebidas ao carrinho.
*   **Efetuar Pagamento**: Implementado na tela [PaymentScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/PaymentScreen.tsx). Permite pagar via Pix (com código copia-e-cola e simulador de QR Code), Cartão de Crédito (com validação de campos) ou Dinheiro.

### 5. Emitir Comprovante
*   Implementado na tela [TicketScreen.tsx](file:///c:/Projects/cinema-nestjs/mobile/src/screens/TicketScreen.tsx). Gera um ticket digital simulando um cupom de cinema contendo o título do filme, horário, assentos escolhidos, lanches comprados, preço final e um código de barras simulado.

### 6. Autenticação JWT
*   O token retornado no login/registro é persistido localmente.
*   A classe [api.ts](file:///c:/Projects/cinema-nestjs/mobile/src/services/api.ts) utiliza um interceptador que anexa automaticamente o cabeçalho `Authorization: Bearer <Token>` em todas as requisições enviadas ao NestJS, garantindo segurança.

### 7. Armazenamento Local de Ingressos e DB Sync (Offline/Online)
*   **Armazenamento Local**: Todos os ingressos e compras são salvos no cache persistente do celular via `AsyncStorage`. O usuário pode visualizar todo o histórico de compras passadas mesmo se estiver sem conexão com a internet.
*   **Fila Offline**: Se o usuário comprar um ingresso sem internet, a compra é salva localmente com o status `"PENDENTE"`.
*   **DB Sync**: Implementado no [syncService.ts](file:///c:/Projects/cinema-nestjs/mobile/src/services/syncService.ts). Quando o app detecta conexão com a internet (ou o usuário clica em sincronizar na tela de histórico), ele envia os ingressos offline em lote para o banco de dados oficial do servidor PostgreSQL, atualizando o status do ingresso local para `"SINCRONIZADO"`.
