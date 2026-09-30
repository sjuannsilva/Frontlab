# FrontLab — Projeto Front-end

Projeto acadêmico de desenvolvimento front-end com foco em semântica, acessibilidade, responsividade, versionamento e preparação para produção.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript ES Modules
- Vite
- Git e GitHub

## Funcionalidades

- Navegação responsiva
- Menu acessível por teclado
- Skip link para o conteúdo principal
- Indicador de foco visível
- Modo claro e escuro
- Formulário com labels e validação
- Layout adaptável para diferentes viewports
- Build de produção com Vite

## Pré-requisitos

- Node.js instalado
- npm
- Git

## Instalação local

```bash
git clone URL_DO_SEU_REPOSITORIO
cd projeto_frontend
npm install
npm run dev
```

Para gerar a build de produção:

```bash
npm run build
```

Para visualizar a build:

```bash
npm run preview
```

## Acessibilidade

A estrutura utiliza landmarks HTML (`header`, `nav`, `main`, `section` e `footer`), labels em formulários, `aria-label`, `aria-expanded`, `aria-live`, skip link e `:focus-visible`. A interface foi pensada para navegação por teclado e leitores de ecrã, tendo WCAG 2.1 como referência.

## GitFlow

- `main`: versão estável/produção.
- `develop`: integração do desenvolvimento.
- `feature/*`: novas funcionalidades.
- `hotfix/*`: correções urgentes.

## Conventional Commits

Exemplos:

```text
feat: adiciona modo escuro
fix: corrige navegação do menu mobile
docs: atualiza README
style: melhora contraste dos componentes
```

## Versionamento SemVer

Formato `MAJOR.MINOR.PATCH`.

- MAJOR: alteração incompatível.
- MINOR: nova funcionalidade compatível.
- PATCH: correção de problema.

Release inicial: `v1.0.0`.

## Deploy

A aplicação pode ser publicada em serviços como Vercel, Netlify ou GitHub Pages após o repositório ser conectado à plataforma escolhida.

## Estrutura

```text
.
├── index.html
├── package.json
├── .gitignore
├── README.md
├── public/
└── src/
    ├── main.js
    └── style.css
```
