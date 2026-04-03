# CLAUDE.md — Landing Page: Painel de Contratos

## Contexto do Projeto

Landing page standalone para o sistema Painel de Contratos.
Propósito desta etapa: validar o workflow `design.md → Stitch → screenshot → Claude Code → screenshot loop`
antes de aplicá-lo no dashboard principal.

Este projeto **não é o produto final**. É o ambiente de teste do processo.

---

## Stack

- React + Vite
- TypeScript
- shadcn/ui (preset b0)
- Tailwind CSS v4

Sem Next.js. Sem SSR.

---

## Skills Ativas

| Skill            | Quando consultar                                              |
|------------------|---------------------------------------------------------------|
| `shadcn`         | Antes de instalar qualquer componente ou ajustar configuração |
| `frontend-design`| Decisões de composição visual, espaçamento, hierarquia        |
| `tailwindv4`     | Qualquer dúvida de sintaxe ou token do Tailwind v4            |
| `ui-ux-pro-max`  | Ajuda na composição de interfaces UI mais robustas            |

MCP shadcn conectado — usar para instalação direta de componentes sem CLI manual.

Antes de construir qualquer novo componente, você deve checar se existe seu reaproveitamento nos registries do shadcn via MCP, bem como SEMPRE usar a skill do shadcn/ui para suas tasks, sem desculpas.

---

## Design System

Fonte única de verdade: `DESIGN_SYSTEM.md` e `DESIGN.md` na raiz do projeto.

Contém:
- Paleta de cores completa (CSS variables)
- Escala tipográfica
- Princípios (No-Line, Ghost Border, Signature Divider, Glassmorphism)
- Especificação de cada seção com estrutura JSX descritiva
- Tipos TypeScript
- Estrutura de arquivos

Nunca tomar decisão visual sem consultar o `DESIGN_SYSTEM.md` ou `DESIGN.md` primeiro.

---

## Screenshot Loop

### Diretórios

```
screenshots/
  reference/    ← imagens do Stitch, permanentes, nunca deletar
  temp/         ← screenshots do loop de autocorreção, descartar após sessão
```

### Ferramenta

Puppeteer via `screenshot.mjs` na raiz do projeto.
Dev server deve estar rodando em `http://localhost:5173` antes de qualquer screenshot.
 
```bash
node screenshot.mjs                               # screenshot padrão
node screenshot.mjs http://localhost:5173 hero    # com label
```
 
Após executar, ler o arquivo gerado em `screenshots/temp/` com a ferramenta de visão para análise.

### Convenção de nomenclatura

```
temp/screenshot-N.png           ← padrão
temp/screenshot-N-label.png     ← com label descritivo (ex: screenshot-3-hero.png)
```

`N` é auto-incrementado. Nunca sobrescrever screenshots existentes.

### Fluxo por seção

```
implementar seção → screenshot temp/ → comparar com reference/ → listar divergências → corrigir → repetir
```

Avançar para a próxima seção somente após a atual estar aprovada.

### Protocolo de comparação

Ao comparar, ser específico e quantitativo:
- "padding superior é ~40px mas referência mostra ~80px"
- "cor do badge é cinza neutro mas deveria ser `#2a2a2a` (`bg-surface-high`)"
- "fonte do headline está em Inter, deveria ser Manrope"

Ordem de correção: **estrutura → espaçamento → cor → tipografia**

### Protocolo de divergência

Se uma divergência não puder ser resolvida em até 2 iterações:
1. Registrar o que foi tentado
2. Verificar se o `DESIGN_SYSTEM.md` ou `DESIGN.md` cobre o caso — se não cobre, é lacuna de especificação
3. Tomar decisão explícita: adaptar implementação ou atualizar `DESIGN_SYSTEM.md` ou `DESIGN.md`
4. Nunca silenciar divergência sem decisão registrada

Tenha sempre ciência que o protótipo de referência foi gerado via Google Stitch e, por isso, o protótipo não apresenta as mesmas decisões de design adotadas pelo shadcn/ui.

### Limpeza

Ao final da sessão, deletar o conteúdo de `temp/` e registrar no commit:
```
chore(screenshots): limpar screenshots temporários da sessão
```

---

## Convenções de Commit

```
feat(componente): descrição da implementação real
mock(componente): dado temporário / placeholder
fix(componente): correção identificada no screenshot loop
```

---

## Estrutura de Arquivos

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
      signature-divider.tsx
  types/
    index.ts
  App.tsx
  index.css
screenshots/
  reference/    ← imagens do Stitch (permanentes)
  temp/         ← screenshots do loop (descartar após sessão)
CLAUDE.md
DESIGN.md
DESIGN_SYSTEM.md
```

---

## Restrições Absolutas

- Nunca usar `<form>` — apenas `onClick`/`onChange`
- Nunca usar `#ffffff` — texto principal em `--on-surface` (#e5e2e1)
- Nunca usar bordas `1px solid` para separar seções
- Nunca usar `border-radius` maior que `DEFAULT` (0.25rem) em containers estruturais
- Sombras apenas em elementos flutuantes, opacidade máxima 6%
- Nunca usar `var(--color-*)` diretamente no JSX — usar classes utilitárias Tailwind
- Dark mode exclusivo — sem toggle de tema nesta landing