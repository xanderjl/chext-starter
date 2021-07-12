This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You should start by installing both Next and Sanity's dependancies with this command:

```bash
yarn install && yarn studio:install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## This Starter Has Opinions

- There are explicit paths defined in `jsconfig.json`
- Customizing the Chakra theme should be done in `./src/theme`

## Other branches

- There's a `sanity` branch in this repo, which will set up a fresh studio, add instructions to the README.md, and add configurations to append the studio to `<base_url>/studio`