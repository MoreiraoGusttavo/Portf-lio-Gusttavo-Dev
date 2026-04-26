# Portfólio de Gusttavo Sacco Moreirão

Este projeto é um portfólio pessoal desenvolvido com **React** **Vite** **CSS** e **PHP**  . Ele apresenta informações sobre mim, minhas habilidades e meus projetos pessoais.

## Novidades na Versão Atual

- **Alinhamento de Habilidades**: As seções de **Hard Skills** e **Soft Skills** foram movidas para o início da linha (esquerda), melhorando a legibilidade e organização visual, saindo do alinhamento centralizado anterior.
- **Identidade Visual**: Adicionado o mini título "GusttavoDev" no canto superior esquerdo para reforçar a marca pessoal.
- **Seção "Vamos Conversar?"**: Adicionada uma nova área de contato com botões estilizados para LinkedIn e Email, facilitando a comunicação para novas propostas e projetos.
- **Alternador de Tema (Dark/Light Mode)**: Adicionado um botão discreto no canto superior direito para alternar entre os modos claro (sol) e escuro (lua), com persistência de preferência.
- **Rodapé Personalizado**: Adicionado rodapé ao final da página com informações de copyright.
- **Nova seção de Projetos Pessoais** com um layout moderno e responsivo:
  - **3 Blocos Lado a Lado**: Implementados usando Flexbox para uma visualização clara em desktops.
  - **Ícones de Redirecionamento**: O projeto **GSM Auto Help Desk** agora conta com ícones pequenos e estilizados que redirecionam para o GitHub, LinkedIn e Email.
  - **Responsividade**: Os blocos e ícones se ajustam automaticamente para uma melhor experiência em dispositivos móveis.
  - **Estilo Moderno**: Efeitos de hover nos blocos e nos ícones sociais, utilizando cores de destaque e bordas arredondadas.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build rápida e moderna.
- **CSS3 (Vanilla)**: Estilização personalizada com variáveis e media queries.

## Estrutura de Arquivos Principal

- `src/App.jsx`: Contém a estrutura principal do portfólio, incluindo a nova seção de projetos.
- `src/App.css`: Contém toda a estilização do projeto, incluindo as classes `.projects-container` e `.project-card`.
- `Back.php`: API em PHP que fornece dados dinâmicos e gerencia requisições do front-end.

## Backend (API PHP)

O arquivo `Back.php` atua como uma API RESTful básica para o portfólio. Ele gerencia:
- **CORS**: Configurado para permitir requisições de diferentes origens (essencial para desenvolvimento com Vite/React).
- **Endpoints**:
    - `?action=status`: Verifica se a API está online.
    - `?action=projects`: Retorna a lista de projetos em formato JSON.
    - `?action=contact` (POST): Simula o recebimento de mensagens de contato.

## Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

---
Desenvolvido por Gusttavo Sacco Moreirão.
