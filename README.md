# Bank App

Aplicação front-end de um sistema bancário simulando operações básicas como autenticação, visualização de saldo e transferências.

O projeto foi desenvolvido com foco em **arquitetura escalável**, **boas práticas de frontend moderno** e **organização por features**.

---

## Acesso à aplicação

Para acessar a plataforma, utilize o seguinte usuário:

- **Username:** `teste123`

> Obs: A autenticação é simulada (mock), não sendo necessário senha.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- TailwindCSS + shadcn/ui
- React Router
- React Hook Form + Zod
- Zustand (gerenciamento de estado)
- React Query (server state)
- Axios
- Vitest + Testing Library

## Arquitetura

O projeto segue o padrão **feature-based architecture**, visando escalabilidade e separação de responsabilidades.

### Estrutura principal

    src/
      components/        # Componentes reutilizáveis (UI)
      features/          # Organização por domínio
        auth/
          components/
          __tests__/
          models/
          state/
          services/
          styles/
      pages/             # Páginas da aplicação
      providers/         # Providers globais (Query, Theme, etc)
      routes/            # Rotas públicas, privadas e layouts
      services/          # Configuração global do Axios
      utils/
        formatters/      # Formatações globais (ex: datas)
        classnames.ts    # Helper para merge de classes (cn)
      App.tsx
      main.tsx
      index.css
      setupTests.ts

### Padrões adotados

- Separação clara entre:
  - **Client state** → Zustand
  - **Server state** → React Query
- Validação com **Zod + React Hook Form**
- Componentização com **shadcn/ui**
- Rotas protegidas com layout dedicado

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

```bash
# instalar dependências
npm install

# rodar ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# preview da build
npm run preview

# rodar testes
npm run test

# lint
npm run lint

# formatar código
npm run format
```

## Segurança

Embora seja um projeto frontend, algumas práticas foram consideradas para simular um ambiente mais seguro:

### Proteção contra engenharia reversa

- Código compilado e minificado via Vite no build de produção
- Separação de responsabilidades dificulta leitura direta da lógica de negócio
- Uso de variáveis de ambiente (`.env`) para configurações sensíveis (ex: `API_URL`)
- Nenhuma lógica crítica ou segredo é armazenado no frontend

### Proteção contra vazamento de dados

- Nenhum dado sensível persistido em localStorage/sessionStorage
- Simulação de autenticação sem armazenamento de tokens reais
- Uso de boas práticas de consumo de API com Axios
- Preparado para integração com:
  - HTTPS obrigatório
  - Tokens seguros (HttpOnly cookies, por exemplo)
- Validação de dados no client com Zod para evitar inputs inválidos

## Decisões técnicas adotadas

### Feature-based architecture

Escolhida para:

- Melhor escalabilidade
- Isolamento por domínio
- Facilidade de manutenção

---

### Zustand ao invés de Context API

- Menos boilerplate
- Melhor performance
- Mais simples para estados globais

---

### React Query para dados assíncronos

- Cache automático
- Revalidação inteligente
- Separação clara entre estado local e remoto

---

### Zod + React Hook Form

- Validação tipada
- Melhor integração com TypeScript
- Redução de erros em runtime

---

### Tailwind + shadcn/ui

- Desenvolvimento rápido de UI
- Consistência visual
- Componentes acessíveis e reutilizáveis

---

### ESLint + Prettier + Husky

- Padronização de código
- Prevenção de erros
- Hooks de commit para garantir qualidade

## Melhorias futuras

- Integração com backend real (autenticação JWT)
- Implementação de refresh token
- Persistência segura de sessão
- Controle de permissões (RBAC)
- Testes E2E (ex: Playwright)
- Internacionalização (i18n)
- Tema dark/light mais avançado
- Melhor cobertura de testes
- Monitoramento (logs e erros com ferramentas externas)
- Otimizações de performance (code splitting e lazy loading)

### Considerações sobre autenticação

- A autenticação atual é simulada e controlada via storage local (mock)
- Essa abordagem foi adotada apenas para simplificar o ambiente de desenvolvimento

Em um cenário real, o ideal seria:

- Utilizar autenticação baseada em tokens (ex: JWT)
- Armazenar tokens de forma segura (preferencialmente via cookies HttpOnly)
- Implementar controle de sessão no backend
- Validar permissões no servidor (não apenas no frontend)

## Trade-offs

Durante o desenvolvimento, algumas decisões foram tomadas considerando simplicidade, tempo e escopo do projeto:

### Simulação de backend

- A aplicação não possui backend real
- Isso simplifica o setup e execução local
- Por outro lado, limita a demonstração de:
  - Autenticação real
  - Persistência de dados
  - Segurança completa (tokens, sessões, etc)

---

### Zustand vs soluções mais robustas

- Zustand foi escolhido pela simplicidade e baixo boilerplate
- Ideal para projetos pequenos e médios
- Trade-off:
  - Não possui ferramentas avançadas nativas como devtools completas ou middlewares complexos (comparado a Redux Toolkit, por exemplo)

---

### React Query sem backend real

- Utilizado para demonstrar boas práticas de server state
- Mesmo sem API real, mostra organização e intenção arquitetural
- Trade-off:
  - Parte do potencial (cache real, invalidação baseada em API) não é totalmente explorado

---

### Foco em arquitetura ao invés de features complexas

- O projeto prioriza organização e escalabilidade
- Trade-off:
  - Menor profundidade em regras de negócio reais

---

### Ausência de testes E2E

- Foram implementados testes unitários e de componentes
- Trade-off:
  - Fluxos completos do usuário não estão cobertos

---

### UI com shadcn/ui

- Permite desenvolvimento rápido e consistente
- Trade-off:
  - Forte dependência de uma base de componentes externa
  - Menor customização em comparação a um design system próprio
