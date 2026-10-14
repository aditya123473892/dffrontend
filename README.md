# Dark Fantasy frontend

Next.js 14 web frontend. Backend: https://github.com/aditya123473892/dfbackend

## Local setup

Use Node.js 20.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Start the backend separately at http://localhost:9000. `.npmrc` enables legacy peer dependency resolution because emoji-mart 3 expects an older React version than this application uses.

## Production build

```sh
npm run build
npm start
```

Set all four NEXT_PUBLIC variables in .env.local to the deployed API and socket endpoints before building; Next.js embeds them at build time. Variables prefixed NEXT_PUBLIC are visible to browsers and must contain no secrets.

Local secrets, logs, installed packages and generated output are excluded. This is the current desktop frontend snapshot; existing chat integration limitations with the backend are not resolved by publishing these repositories.
