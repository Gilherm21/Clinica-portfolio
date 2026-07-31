# Clínica Vitalis — versão HTML/CSS/JS

Landing page de portfólio em HTML, CSS e JavaScript puros (sem build, sem dependências).

## Estrutura

```
index.html      # marcação + SEO + JSON-LD + sprite de ícones SVG
styles.css      # design system (variáveis oklch), layout e responsividade
script.js       # conteúdo dinâmico, menu mobile, FAQ, formulário e animações
assets/         # imagens (hero + equipe)
```

## Como rodar

Basta abrir `index.html` no navegador. Para um servidor local:

```bash
python3 -m http.server 8080
# ou
npx serve .
```

Acesse `http://localhost:8080`.

## Personalização

- **Cores/fontes:** variáveis em `:root` no topo de `styles.css`.
- **Textos e seções:** arrays no topo de `script.js` (`services`, `team`, `faqs`, ...).
- **Formulário:** em `script.js`, substitua o `setTimeout` de simulação por um `fetch()` para sua API, Formspree, ou link de WhatsApp.

Conteúdo demonstrativo para portfólio.
