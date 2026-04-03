# REVIEW.md — Code Review: Landing Page Pactum

## Resumo

Auditoria completa da landing page antes do PR. Verificação contra as restrições absolutas do CLAUDE.md e padrões do design system.

---

## Checklist de Restrições Absolutas

| Regra | Status | Detalhes |
|-------|--------|----------|
| Nunca usar `<form>` | PASS | CTA usa `onClick`/`onChange` com Formspree via `FormData` |
| Nunca usar `#ffffff` | WARN | 4 instâncias de `bg-white` em grid lines decorativas do dashboard-preview. `border-white/5` aceito como ghost border |
| Nunca usar bordas `1px solid` entre seções | PASS | Seções separadas por tonal shift e espaçamento |
| Nunca usar `border-radius` > DEFAULT em containers estruturais | PASS | Containers usam `rounded-lg` / `rounded-xl` |
| Sombras apenas em elementos flutuantes, opacidade max 6% | FAIL | 11 violações — ver seção abaixo |
| Nunca usar `var(--color-*)` no JSX | PASS | Apenas classes Tailwind |
| Dark mode exclusivo | PASS | `class="dark"` no `<html>`, sem toggle |

---

## Violações Críticas

### 1. Opacidade de sombras acima de 6%

Todas as sombras estão em elementos flutuantes (correto), mas a opacidade excede o limite de 6%.

| Arquivo | Sombra | Opacidade | Limite |
|---------|--------|-----------|--------|
| `hero.tsx` | `shadow-primary/10` | 10% | 6% |
| `hero.tsx` | `shadow-primary/20` (hover) | 20% | 6% |
| `dashboard-preview.tsx` | `shadow-[..rgba(0,0,0,0.8)]` | 80% | 6% |
| `dashboard-preview.tsx` | `shadow-[..rgba(0,0,0,0.9)]` (hover) | 90% | 6% |
| `dashboard-preview.tsx` | `shadow-[..rgba(244,189,94,0.8)]` | 80% | 6% |
| `intelligence-vault.tsx` | `shadow-black/40` | 40% | 6% |
| `intelligence-vault.tsx` | `shadow-[..rgba(0,0,0,0.7)]` (hover) | 70% | 6% |
| `intelligence-vault.tsx` | `shadow-[..rgba(0,0,0,0.5)]` | 50% | 6% |

**Decisão necessária:** aplicar o limite de 6% tornará os componentes visuais (dashboard, vault) praticamente sem profundidade. Recomendação: manter as sombras atuais como exceção documentada para elementos de showcase (dashboard preview e intelligence vault), ou reduzir para um meio-termo (~15-20%).

### 2. Import não utilizado

| Arquivo | Import | Ação |
|---------|--------|------|
| `intelligence-vault.tsx` | `Badge` de `@/components/ui/badge` | Remover |

**Impacto:** erro `TS6133` com `noUnusedLocals: true`.

---

## Violações Menores

### `bg-white` em dashboard-preview.tsx

4 instâncias de `bg-white` usadas como grid lines decorativas dentro do chart SVG (opacity-10 via container). Substituir por `bg-on-surface/10` para alinhar com tokens.

---

## Itens Aprovados

### Arquitetura de Componentes
- 11 componentes de página + 10 UI components
- Composição limpa no App.tsx (Navbar → Hero → TrustBar → Problem → Features → Permissions → SocialProof → CTA → Footer)
- Todos os imports utilizados (exceto 1 Badge)

### Tipografia
- `font-display` (Manrope Variable) para headlines
- `font-body` (Inter Variable) para corpo
- Imports via `@fontsource-variable`

### Tokens de Cor
- Paleta Obsidian Vault aplicada via `@theme inline` no index.css
- Mapeamento correto para tokens shadcn (background, foreground, card, etc.)
- Nenhuma cor hardcoded fora dos tokens

### Integração Formspree
- Endpoint: `https://formspree.io/f/xkopqpqq`
- Sem `<form>` tag — submit via `FormData` + `onClick`
- Validação client-side: campos obrigatórios + regex de email
- Feedback visual: loading (Loader2), sucesso (CheckCircle2), erro inline (border-red-400)
- Dupla camada: client-side + validação server-side do Formspree

### index.html
- `lang="en"`, `class="dark"`
- Favicon: logo Pactum SVG (dourado #f4bd5e)
- Title: "Pactum — Gestão de Contratos"

### Responsividade
- Grid responsivo em todas as seções (1col mobile → multi-col desktop)
- Navbar links ocultos em mobile (`hidden md:flex`)
- Hero com `min-h-[calc(100svh-4rem)]`

---

## Ações Antes do PR

### Obrigatórias
- [ ] Remover import `Badge` de `intelligence-vault.tsx`
- [ ] Substituir `bg-white` por `bg-on-surface/10` no dashboard-preview (4 instâncias)
- [ ] Decidir sobre sombras: manter como exceção ou reduzir opacidade

### Recomendadas
- [ ] Alterar `lang="en"` para `lang="pt-BR"` no index.html (conteúdo em português)
- [ ] Limpar `screenshots/temp/` antes do commit final
- [ ] Verificar `npx tsc -b` sem erros após correções

---

## Estrutura de Arquivos Final

```
src/
  components/
    navbar.tsx
    hero.tsx
    trust-bar.tsx
    problem-section.tsx
    features-section.tsx
    intelligence-vault.tsx
    permissions-section.tsx
    social-proof-section.tsx
    cta-section.tsx
    dashboard-preview.tsx
    footer.tsx
    ui/
      avatar.tsx
      background-paths.tsx
      badge.tsx
      button.tsx
      card.tsx
      input.tsx
      pactum-logo.tsx
      scroll-area.tsx
      separator.tsx
      signature-divider.tsx
  assets/
    social-proof-portrait.png
  types/
    index.ts
  lib/
    utils.ts
  App.tsx
  main.tsx
  index.css
```
