# design.md — Landing Page: Painel de Contratos

## Stack & Setup

```bash
npx shadcn@latest init --preset b0 --template vite
```

Componentes shadcn/ui necessários:
```bash
npx shadcn@latest add card badge button separator input
```

---

## Contexto do Produto

Landing page institucional do **Painel de Contratos** — sistema interno de gestão de contratos desenvolvido para escritórios de advocacia.
Público-alvo: gestores e sócios de escritórios que ainda operam com processos manuais ou sistemas legados.
Objetivo: gerar solicitações de acesso/demonstração.

---

## Identidade Visual: The Obsidian Vault

### Paleta de Cores

| Token                  | Valor     | Classe Tailwind               | Uso                                  |
|------------------------|-----------|-------------------------------|--------------------------------------|
| `surface-lowest`       | `#0e0e0e` | `bg-surface-lowest`           | Background global                    |
| `surface-low`          | `#1c1b1b` | `bg-surface-low`              | Áreas primárias / seções alternadas  |
| `surface`              | `#201f1f` | `bg-surface`                  | Cards                                |
| `surface-high`         | `#2a2a2a` | `bg-surface-high`             | Cards interativos                    |
| `surface-bright`       | `#3a3939` | `bg-surface-bright`           | Hover / active                       |
| `primary`              | `#f4bd5e` | `bg-primary` / `text-primary` | Gold — hallmark de qualidade         |
| `primary-container`    | `#b9882e` | `bg-primary-container`        | Gold escuro (gradiente CTA)          |
| `primary-fixed`        | `#ffdeac` | `text-primary-fixed`          | Texto em badge sobre fundo escuro    |
| `outline-variant`      | `#4f4537` | `border-outline-variant`      | Ghost border — 15–20% opacity        |
| `on-surface`           | `#e5e2e1` | `text-on-surface`             | Texto principal — nunca usar #ffffff |
| `on-surface-variant`   | `#938f8d` | `text-on-surface-variant`     | Texto secundário / metadata          |
| `on-primary`           | `#1a1200` | `text-on-primary`             | Texto sobre fundo dourado            |
| `tertiary`             | `#7ab9e8` | `text-tertiary`               | Links e tooltips técnicos            |

### Tipografia

```
Display / Headlines  →  Manrope (Google Fonts)
Body / UI            →  Inter (Google Fonts)
```

| Token        | Fonte    | Tamanho  | Peso | Uso                              |
|-------------|----------|----------|------|----------------------------------|
| display-lg   | Manrope  | 3.5rem   | 700  | Hero headline principal          |
| headline-lg  | Manrope  | 2rem     | 600  | Títulos de seção                 |
| title-md     | Inter    | 1.125rem | 500  | Sub-headers, labels de card      |
| body-md      | Inter    | 0.875rem | 400  | Texto geral / descritivo         |
| label-sm     | Inter    | 0.6875rem| 400  | Metadata, rodapé, fine print     |

---

## Princípios de Design

### No-Line Philosophy
Proibido usar bordas `1px solid` para separar seções.
Estrutura é obtida por:
- **Tonal shift**: superfícies em camadas (`bg-surface-lowest` → `bg-surface-low` → `bg-surface`)
- **Espaço negativo**: `spacing-16` a `spacing-24` entre seções distintas

### Ghost Border (exceção)
Quando necessário para acessibilidade:
- Cor: `border-outline-variant` (#4f4537)
- Opacidade: 15–20%
- Aplicar apenas em tabelas densas ou inputs

### Signature Divider
Separador de seção editorial: bloco horizontal `24px × 2px` na cor `--primary` (dourado).
Substitui `<hr>` e linhas convencionais.

### Glassmorphism (elementos flutuantes)
Para dropdowns ou modais futuros:
- Fill: `bg-surface` a 75% opacity
- `backdrop-blur: 12px`

### Cantos e Raios
- Containers estruturais: `border-radius: 0.25rem` (DEFAULT — aspecto arquitetônico)
- Badges / chips: `border-radius: 9999px` (pill)
- Nunca usar `xl` ou `2xl` em containers primários

### Sombras
- Apenas em elementos flutuantes
- `box-shadow: 0 16px 32px rgba(229, 226, 225, 0.06)`
- Nunca acima de 6% de opacidade

---

## Estética Geral

- **Tema**: Dark exclusivo — sem light mode nesta landing
- **Estilo**: High-End Editorial / Obsidian Vault
- **Não usar**: gradientes vibrantes, sombras >6% opacity, cantos arredondados grandes, cores saturadas, branco puro (#fff)
- **Espaçamento**: generoso — `spacing-20` a `spacing-24` entre seções
- **Assimetria intencional**: tipografia e grid podem quebrar o eixo para criar ritmo editorial

---

## Layout Geral

```
┌──────────────────────────────────────────────┐
│  Navbar (fixo, glassmorphism)                │
├──────────────────────────────────────────────┤
│  Hero                                        │
├──────────────────────────────────────────────┤
│  Seção Problema (3 cards)                    │
├──────────────────────────────────────────────┤
│  Seção Features (grid 2x2)                   │
├──────────────────────────────────────────────┤
│  Seção Permissões (2 colunas)                │
├──────────────────────────────────────────────┤
│  Seção Social Proof (blockquote)             │
├──────────────────────────────────────────────┤
│  Seção CTA Final (formulário inline)         │
├──────────────────────────────────────────────┤
│  Footer                                      │
└──────────────────────────────────────────────┘
```

---

## 1. Navbar

```tsx
// components/navbar.tsx

- Fixo no topo, glassmorphism: `bg-surface/75` + backdrop-blur 12px
- Esquerda: logotipo textual — "PAINEL DE CONTRATOS" em Manrope bold, `text-primary`
- Direita: <Button> "Solicitar Acesso" → ancora para seção CTA
- Sem links de navegação adicionais
- Altura: 64px
```

---

## 2. Hero

```tsx
// components/hero.tsx

Layout: centralizado, padding-top 160px, padding-bottom 120px
Background: `bg-surface-lowest`

Conteúdo (ordem vertical):
1. Badge pill: "Sistema Interno · Escritórios de Advocacia"
   - `bg-surface-high`, `text-primary-fixed`, font: label-sm
2. Headline (display-lg, Manrope, 700):
   "Gestão de contratos
    sem planilha, sem ruído."
3. Subheadline (body-md, Inter, `text-on-surface-variant`):
   "O Painel de Contratos centraliza o ciclo completo dos seus contratos —
    do cadastro à conclusão — com controle de acesso por perfil e rastreabilidade total."
4. CTA group (gap-4):
   - <Button> primário: "Solicitar Demonstração"
     → bg: `linear-gradient(to right, #f4bd5e, #b9882e)`, `text-on-primary`
   - <Button variant="ghost"> "Conhecer funcionalidades" → ancora para #features

Signature Divider abaixo do hero (bloco 24px × 2px, cor --primary, centralizado)
```

---

## 3. Seção Problema

```tsx
// components/problem-section.tsx

Título da seção (headline-lg, Manrope):
  "O que acontece sem um sistema centralizado"

Subtítulo (body-md, --on-surface-variant):
  "Processos manuais geram retrabalho, perda de informação e risco jurídico."

Grid: 3 colunas (md:grid-cols-3), gap-6

Card 1 — "Contratos espalhados"
  Ícone: FolderOpen (`text-on-surface-variant`)
  Descrição: "Arquivos em e-mail, pasta de rede e planilha — sem versão única da verdade."

Card 2 — "Status gerenciado na memória"
  Ícone: BrainCircuit (`text-on-surface-variant`)
  Descrição: "Ninguém sabe ao certo quais contratos estão ativos, quais aguardam assinatura."

Card 3 — "Visibilidade financeira zero"
  Ícone: TrendingDown (`text-on-surface-variant`)
  Descrição: "Valor em contratos ativos, entrada recebida e parcelas pendentes calculados na mão."

Estrutura de cada card:
<Card> `bg-surface`, sem sombra, radius: DEFAULT
  <CardHeader>
    <Icon className="h-5 w-5 mb-3" />
    <CardTitle className="text-sm font-medium">{titulo}</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">{descricao}</p>
  </CardContent>
</Card>
```

---

## 4. Seção Features

```tsx
// components/features-section.tsx
// id="features"

Signature Divider no topo da seção

Título (headline-lg, Manrope):
  "Tudo que o escritório precisa, em um lugar"

Grid: 2 colunas (md:grid-cols-2), gap-6

Feature 1 — "Cadastro e consulta centralizados"
  Ícone: FilePlus2
  Descrição: "Registre contratos com tipo, cliente, valores e vencimento. Filtre por qualquer campo em segundos."

Feature 2 — "Controle de status em tempo real"
  Ícone: Layers
  Descrição: "Acompanhe contratos Ativos, Concluídos e Inativos com atualização instantânea e histórico preservado."

Feature 3 — "Gestão de anexos integrada"
  Ícone: Paperclip
  Descrição: "Anexe contrato assinado e comprovante de pagamento diretamente no registro. Sem e-mail, sem pasta compartilhada."

Feature 4 — "Visão financeira agregada"
  Ícone: BarChart3
  Descrição: "Cards de estatísticas com valor total em contratos ativos, contratos aguardando assinatura e mais."

Estrutura de cada card:
<Card> `bg-surface-high`, sem sombra, radius: DEFAULT
  Ícone + título em linha (gap-3)
  Descrição abaixo (body-md, `text-on-surface-variant`)
</Card>
```

---

## 5. Seção Permissões

```tsx
// components/permissions-section.tsx

Título (headline-lg, Manrope):
  "Controle de acesso por perfil"

Subtítulo (body-md, --on-surface-variant):
  "Dois níveis de permissão para separar operação de aprovação."

Layout: 2 colunas (md:grid-cols-2), gap-8

Coluna 1 — Perfil Editor
  Badge: "Editor" (pill, `bg-surface-high`, `text-on-surface`)
  Lista de capacidades:
  - Cadastrar e editar contratos
  - Inativar e reativar contratos
  - Gerenciar anexos (upload)
  - Consultar com filtros avançados

Coluna 2 — Perfil Aprovador
  Badge: "Aprovador" (pill, `bg-primary/15`, `text-primary-fixed`)
  Lista de capacidades:
  - Tudo que o Editor pode
  - Concluir contratos ativos
  - Acesso a todos os relatórios financeiros
  - Visibilidade total do ciclo do contrato

Estilo da lista: sem bullet points visuais padrão —
usar ícone CheckCircle2 (`text-primary`, 14px) à esquerda de cada item
```

---

## 6. Seção Social Proof

```tsx
// components/social-proof-section.tsx

Layout: centralizado, max-width 640px, margin auto

Signature Divider no topo

Blockquote estilizado:
  - Aspas tipográficas grandes (Manrope, 4rem, `text-primary/40`) no canto superior esquerdo
  - Texto (title-md, Inter, `text-on-surface`):
    "Antes, eu precisava ligar para o assistente para saber o status de um contrato.
     Agora abro o painel e vejo tudo em 10 segundos."
  - Atribuição (label-sm, `text-on-surface-variant`):
    "— Sócia responsável pela área comercial"

Background: `bg-surface-low`, padding generoso, radius: DEFAULT
```

---

## 7. Seção CTA Final

```tsx
// components/cta-section.tsx
// id="cta"

Background: `bg-surface-low`

Título (headline-lg, Manrope):
  "Pronto para modernizar a gestão de contratos?"

Subtítulo (body-md, `text-on-surface-variant`):
  "Preencha o formulário e nossa equipe entrará em contato para agendar uma demonstração."

Formulário inline (max-width: 480px, centralizado):
  - Input "Nome completo" (obrigatório)
  - Input "E-mail profissional" (obrigatório, type="email")
  - Input "Nome do escritório" (obrigatório)
  - <Button type="submit"> "Solicitar Acesso"
    → bg: `linear-gradient(to right, #f4bd5e, #b9882e)`, `text-on-primary`

Nota abaixo do botão (label-sm, `text-on-surface-variant`):
  "Sem compromisso. Respondemos em até 1 dia útil."

Estilo dos inputs:
  - `bg-surface`, `border-outline-variant/20`
  - Focus: highlight inferior 2px em `bg-surface-bright` (sem outline completo)
  - Radius: DEFAULT
```

---

## 8. Footer

```tsx
// components/footer.tsx

Layout: flex row, justify-between
Background: `bg-surface-lowest`
Padding: py-8

Esquerda:
  "PAINEL DE CONTRATOS" (label-sm, Manrope, `text-on-surface-variant`)

Direita:
  "Sistema interno · Todos os direitos reservados" (label-sm, `text-on-surface-variant`)

Sem links adicionais.
```

---

## Tipos TypeScript

```ts
// types/index.ts

interface SolicitacaoAcesso {
  nomeCompleto: string;
  emailProfissional: string;
  nomeEscritorio: string;
}

interface Feature {
  icone: string;          // nome do ícone Lucide
  titulo: string;
  descricao: string;
}

interface Problema {
  icone: string;
  titulo: string;
  descricao: string;
}

interface PerfilPermissao {
  nome: "Editor" | "Aprovador";
  capacidades: string[];
}
```

---

## Estrutura de Arquivos Sugerida

```
src/
  components/
    navbar.tsx
    hero.tsx
    problem-section.tsx
    features-section.tsx
    permissions-section.tsx
    social-proof-section.tsx
    cta-section.tsx
    footer.tsx
    ui/
      signature-divider.tsx   ← bloco 24px × 2px, cor --primary
  types/
    index.ts
  App.tsx
  index.css                   ← CSS variables do design system
```

---

## Theme Tokens (index.css)

Usando `@theme` do Tailwind v4 — os tokens abaixo são expostos automaticamente como utilitários (`bg-surface-lowest`, `text-primary`, `font-display`, etc.).

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  /* Superfícies */
  --color-surface-lowest:     #0e0e0e;
  --color-surface-low:        #1c1b1b;
  --color-surface:            #201f1f;
  --color-surface-high:       #2a2a2a;
  --color-surface-bright:     #3a3939;

  /* Dourado */
  --color-primary:            #f4bd5e;
  --color-primary-container:  #b9882e;
  --color-primary-fixed:      #ffdeac;

  /* Outline */
  --color-outline-variant:    #4f4537;

  /* Texto */
  --color-on-surface:         #e5e2e1;
  --color-on-surface-variant: #938f8d;
  --color-on-primary:         #1a1200;

  /* Terciário */
  --color-tertiary:           #7ab9e8;

  /* Tipografia */
  --font-display: 'Manrope', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

### Utilitários gerados automaticamente

| Token                        | Classe Tailwind                  |
|-----------------------------|----------------------------------|
| `--color-surface-lowest`    | `bg-surface-lowest`              |
| `--color-surface-low`       | `bg-surface-low`                 |
| `--color-surface`           | `bg-surface`                     |
| `--color-surface-high`      | `bg-surface-high`                |
| `--color-surface-bright`    | `bg-surface-bright`              |
| `--color-primary`           | `bg-primary` / `text-primary`    |
| `--color-primary-fixed`     | `text-primary-fixed`             |
| `--color-on-surface`        | `text-on-surface`                |
| `--color-on-surface-variant`| `text-on-surface-variant`        |
| `--color-on-primary`        | `text-on-primary`                |
| `--color-outline-variant`   | `border-outline-variant`         |
| `--color-tertiary`          | `text-tertiary`                  |
| `--font-display`            | `font-display`                   |
| `--font-body`               | `font-body`                      |

Nunca usar `var(--color-*)` diretamente no JSX — usar as classes utilitárias Tailwind correspondentes.