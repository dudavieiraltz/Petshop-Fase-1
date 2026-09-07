# PetShop Amigo Animal - Fase 2

## Descrição

Evolução do sistema estático desenvolvido na Fase 1 para uma aplicação web mais atrativa, responsiva, interativa e acessível, utilizando CSS3, Bootstrap e JavaScript.

## Objetivo

Transformar o sistema estático da Fase 1 em uma aplicação web mais próxima de um sistema real, com identidade visual própria, carrossel de destaques, formulários de cadastro (cliente e pet) e sistema de agendamento de banho e tosa, com validações e feedback dinâmico via JavaScript.

## Funcionalidades

- Apresentação de produtos e categorias (Acessórios, Rações, Higiene e Limpeza);
- Apresentação de serviços (Banho e Tosa com/sem tele-busca);
- Carrossel de destaques na página inicial (Bootstrap);
- Cadastro de cliente (nome, CPF, sexo, telefone, e-mail, endereço, cidade, estado);
- Cadastro do pet (nome, espécie, raça, idade, sexo, observações);
- Agendamento de banho e tosa com escolha de método (tele-busca ou entrega no local), data e horário;
- Validação de formulários via JavaScript (campos obrigatórios, CPF, data não retroativa);
- Resumo dinâmico do agendamento após confirmação;
- Mensagem de orientação dinâmica conforme o método de atendimento escolhido;
- Relógio dinâmico no cabeçalho (função temporal), indicando se a loja está aberta;
- Recursos de acessibilidade: alt descritivo em imagens, label associado aos campos, foco visível, aria-live nas mensagens dinâmicas;
- Layout responsivo (desktop, tablet e smartphone).

## Tecnologias

- HTML5
- CSS3
- Bootstrap 5 (via CDN)
- JavaScript
- Git
- GitHub
- GitHub Pages

## Estrutura do projeto

```
petshop/
├── index.html          (página inicial, com carrossel)
├── produtos.html        (visão geral das 3 categorias)
├── acessorios.html      (categoria: acessórios)
├── racoes.html          (categoria: rações não perecíveis)
├── higiene.html         (categoria: higiene e limpeza)
├── servicos.html        (banho e tosa com e sem tele-busca)
├── cadastro.html        (cadastro de cliente e pet)
├── agendamento.html     (agendamento de banho e tosa)
├── css/
│   └── style.css        (identidade visual do sistema)
├── js/
│   └── script.js        (relógio, validações, resumo dinâmico)
├── imagens/              (imagens ilustrativas dos produtos e serviços)
└── README.md
```

## Ajustes realizados na Fase 2

- Adição do Bootstrap 5 (CDN) e de um arquivo CSS externo (`css/style.css`) para identidade visual, cards, botões e responsividade;
- Adição de `js/script.js` externo, com relógio dinâmico, validação de formulários e geração de resumo do agendamento;
- Implementação do carrossel Bootstrap obrigatório na página inicial, com imagens já existentes da Fase 1, textos descritivos, controles e indicadores acessíveis;
- Criação das páginas `cadastro.html` e `agendamento.html`, mantendo o mesmo header, navegação e footer das demais páginas;
- Atualização do menu de navegação em todas as páginas, incluindo os novos links "Cadastro" e "Agendamento";
- Adição de `label` associado a todos os campos de formulário e de `aria-live` nas mensagens dinâmicas, para leitura por leitores de tela;
- Verificação de que todas as imagens já possuíam `alt` descritivo (mantido da Fase 1);
- Ajuste do layout para responsividade em desktop, tablet e smartphone, usando o grid do Bootstrap e media query adicional no CSS para telas pequenas;
- Revisão de todos os links de navegação entre as 8 páginas, sem links quebrados.

## Como executar

1. Clone este repositório.
2. Abra o arquivo index.html em um navegador ou utilize o Live Server no VS Code.
3. Navegue pelo menu para acessar as demais páginas, incluindo cadastro e agendamento.

## Links

- Repositório GitHub: (https://github.com/dudavieiraltz/Projeto-Petshop)
- Sistema publicado (GitHub Pages): https://dudavieiraltz.github.io/Projeto-Petshop/
