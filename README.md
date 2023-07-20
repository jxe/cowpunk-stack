# Welcome to Remix Cowpunk

To use this to make a new remix repo, do something like

```sh
bunx create-remix@latest --template jxe/cowpunk-stack
```

## Getting started checklist

- [ ] make a db on supabase, vercel, or whatever
- [ ] make a mailgun account
- [ ] stick the db info and mailgun info into an `.env` file (see below)
- [ ] run `bunx prisma db push` to populate your db
- [ ] modify the stuff in `/app/config.server.ts` so your login emails have a good FROM address
- [ ] run it locally `bunx prisma generate && bun run dev` and try logging in

## Development

Stick the following stuff in an `.env` file

```sh
POSTGRES_URL="..."
POSTGRES_PRISMA_URL="..."
POSTGRES_URL_NON_POOLING="..."
SESSION_SECRET="..."
MAILGUN_API_KEY="..."
MAILGUN_DOMAIN="..."
```

You may also need this if your mailgun is in the EU.

```sh
MAILGUN_URL=https://api.eu.mailgun.net
```

Also modify the stuff in `/app/config.server.ts`.

Then you should be able to

```sh
bunx prisma generate
bun run dev
```

To start your app in development mode, rebuilding assets on file changes.

## Evolving the schema

Let's say you want to add a table to the db. Just run `bunx prisma db push` to take your local changes in schema.prisma and migrate the live db to match.

## Learn about remix

- [Remix Docs](https://remix.run/docs)
