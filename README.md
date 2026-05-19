# Portfólio - Marcus Gajozo

Portfólio pessoal desenvolvido com Next.js, apresentando projetos, habilidades, artigos e informações de contato.

## Tecnologias

- **[Next.js 16](https://nextjs.org/)** — framework React com SSR e App Router
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilização utilitária
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** — cenas 3D com Three.js
- **[Radix UI](https://www.radix-ui.com/)** — componentes acessíveis
- **[next-themes](https://github.com/pacocoursey/next-themes)** — suporte a tema claro/escuro
- **[Zustand](https://zustand-demo.pmnd.rs/)** — gerenciamento de estado

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 24
- [pnpm](https://pnpm.io/) >= 10

## Instalação

```bash
pnpm install
```

## Scripts

| Comando         | Descrição                                |
| --------------- | ---------------------------------------- |
| `pnpm dev`      | Inicia o servidor de desenvolvimento     |
| `pnpm build`    | Gera o build de produção                 |
| `pnpm start`    | Inicia o servidor de produção            |
| `pnpm lint`     | Verifica erros de lint                   |
| `pnpm lint:fix` | Corrige erros de lint e formata o código |

## Docker

```bash
# Build da imagem
docker build -t portfolio-marcusgajozo .

# Execução do container
docker run -p 3000:3000 portfolio-marcusgajozo
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura

```
src/
├── app/
│   ├── _components/        # Seções da página principal
│   │   ├── home-section/
│   │   ├── about-me-section/
│   │   ├── hard-skill-section/
│   │   ├── projects-section/
│   │   ├── articles-section/
│   │   └── contact-section/
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Componentes reutilizáveis
│   ├── button/
│   ├── footer/
│   ├── icon/
│   ├── section/
│   ├── sidebar/
│   └── technology/
├── constants/
├── lib/
└── providers/
```

## Qualidade de código

O projeto utiliza as seguintes ferramentas para garantir consistência:

- **ESLint** — regras para imports, variáveis não usadas e `console.log`
- **Prettier** — formatação de código e ordenação de classes Tailwind
- **Husky + lint-staged** — executa lint e formatação automaticamente nos arquivos staged
- **Commitlint** — valida mensagens de commit no padrão [Conventional Commits](https://www.conventionalcommits.org/)

### Padrão de commits

```
feat: nova funcionalidade
fix: correção de bug
chore: tarefas de manutenção
docs: documentação
style: formatação
refactor: refatoração sem mudança de comportamento
```
