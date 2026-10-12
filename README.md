# Além da Missa

Página de links de Daniel Moraes, com visual de vidro em verde profundo e dourado.

## Desenvolvimento

```sh
npm ci
npm start
```

## Publicação

```sh
npm run build
```

O GitHub Actions compila propostas em pull requests. Somente alterações na branch `master` publicam em `gh-pages`.

Os destinos estão em `src/screens/home/home.js`, o visual em `src/screens/home/home.css` e a foto em `public/daniel.jpg`. O e-book aparece primeiro, seguido de Instagram, TikTok, YouTube e Kwai; a playlist fica por último.

A miniatura do e-book é uma representação tipográfica ilustrativa. Os endereços sociais seguem o usuário `@alemdamissa` informado pelo criador; confirme o link compartilhável do Kwai antes de publicar. A página utiliza o Google Analytics 4 com o ID `G-0EDXZ35MRD`.

## Métricas

O Google tag registra visitas à página. Cada botão envia seu próprio evento:

- `click_ebook`
- `click_instagram`
- `click_tiktok`
- `click_youtube`
- `click_kwai`
- `click_spotify`

Para verificar após publicar, abra a página e clique nos botões; consulte o relatório Tempo real do Google Analytics. Os eventos contêm `link_name` e `link_url`. São cliques, não compras. A medição otimizada pode enviar também o evento automático `click`; não some esse evento aos eventos personalizados para contar os mesmos cliques.

A prévia HTML não envia métricas; a integração funciona no aplicativo compilado. Bloqueadores de rastreamento podem impedir a coleta.
