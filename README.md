# CATAMARA Website Rebuild

Premium multi-page CATAMARA website rebuilt in Next.js App Router with TypeScript, Tailwind CSS, and Framer Motion.

The content model is grounded in the supplied source material:

- `CATAMARA Company profile.pdf`
- `catamara.html`
- `catamara ai agent.html`
- `catamara-ai-agent-openrouter.html`
- `catamara_workflow.xlsx`
- logo and organization visuals

## Routes

- `/`
- `/ai-agent`
- `/services`
- `/industries`
- `/case-studies`
- `/about`
- `/contact`

## Commands

```bash
npm run dev
npm run build
npm run start
```

`dev` and `build` are configured with `--webpack` for reliable local execution on this Windows environment.

## Content Architecture

- Shared factual content lives in `src/content/site.ts`
- Shared layout and reusable components live in `src/components/site`
- Shared UI primitives live in `src/components/ui`

## Local Preview

After starting the app, open [http://localhost:3000](http://localhost:3000).
