# labr-site

Landing page for [labr.club](https://labr.club), served by the Cloudflare Worker `labr-site`.

## Layout

- `public/index.html`: the page (single file, inline CSS)
- `public/readme.html`, `public/terms.html`, `public/privacy.html`: /readme, /terms and /privacy
- `public/llms.txt`: setup notes for agents
- `public/logo.svg`, `logo.png`, `logo-square.png`: hosted logo files
- `public/og.png`: link-preview image (1200x630)
- `src/worker.js`: redirects www to the apex domain, serves `public/`
- `wrangler.jsonc`: Worker config and custom domains

## Deploying

Pushes to `main` deploy automatically through Cloudflare Workers Builds.

To run it locally:

```
npx wrangler dev
```
