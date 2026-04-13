# GovLink: Arquitetura de Navegação Profissional

Concluímos a reestruturação da plataforma, separando o conteúdo de marketing (Landing Page) da área de acesso (Login/Registo). Isto torna o **GovLink** mais organizado e escalável.

## O que mudou?

### 1. Página de Autenticação Independente (`/login`)
*   **Design Split-Screen:** Mantivemos o visual impactante de ecrã dividido, mas agora numa página dedicada que ocupa 100% do ecrã.
*   **Navegação Inteligente:** A página de autenticação agora detecta se o utilizador quer fazer Login ou criar uma conta baseada no botão clicado na Landing Page.
*   **Botão de Retorno:** Adicionamos um botão "Voltar para o Início" para facilitar o retorno à página principal.

### 2. Landing Page Limpa (`/`)
*   **Foco no Alvo:** A página inicial agora foca-se exclusivamente em explicar o valor do **GovLink** e captar novos utilizadores.
*   **Performance:** Sem o formulário de login integrado, a página carregar mais rápido e oferece uma experiência de leitura superior.

### 3. Rotas Protegidas e Segurança
*   **Redireccionamento Automático:** Se um utilizador tentar aceder ao Dashboard ou a qualquer área interna sem estar logado, o sistema encaminha-o automaticamente para a página de `/login`.
*   **Fluxo de Login:** Após o login bem-sucedido, o utilizador é levado directamente para o seu painel pessoal.

## Como Testar o Novo Fluxo

1.  **Explorar:** Comece na Landing Page (`/`).
2.  **Selecionar:** Clique em "Entrar" (para login) ou "Criar Conta" (para registo).
3.  **Transição:** Verá que é levado para a nova URL `/login`.
4.  **Autenticar:** Introduza as credenciais e clique no botão principal.
5.  **Acesso:** Será redireccionado instantaneamente para a área interna protegida.
6.  **Voltar:** Na página de login, use o botão no canto superior esquerdo ou clique no logótipo para voltar ao início.

---

> [!IMPORTANT]
> Estrutura de Rotas
> O sistema utiliza agora o `react-router-dom` para gerir de forma robusta o que é público e o que é privado. Esta é a base ideal para quando integrarmos um servidor real (backend) no futuro.

> [!TIP]
> Micro-Interações
> Repare na transição suave quando alterna entre "Entrar" e "Criar Conta" na nova página de autenticação. O design minimalista e tech-inspired foi mantido em todos os estados.
