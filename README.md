This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

___

## Notes
My Next.js project for the [Intro to Next.js, v2 course on frontendmasters.com](https://frontendmasters.com/courses/next-js-v2/)

Course website: https://intro-nextjs-v2-instructions.vercel.app/

Other React.js frameworks, if curious: https://remix.run/, and https://astro.build/

Interesting Things to Note:
A modern terminal: https://www.warp.dev/

The following CLI command generates a latest and newest Next.js app
```
npx create-next-app@13.1 --experimental-app
```

The ```next``` prefix in package.json is a CLI command. More info can be found at https://www.npmjs.com/package//next.

Server components are not to be confused with Server Side Rendering (SSR). Traditional SSR renders then serializes the HTML on the
backend then sends it to the client whereas server components fetch any necessary data then get streamed to the client and can't access frontend resources or APIs.

Since all components are server components by default, Next.js 13+ forces you to think about how your components will be used, for example, if you have a form versus a navigation bar. Also, a lot of 3rd-party libraries will require the ```'use client'``` directive to work properly.

An example of an error when trying to access client-side objects with a server component:

![An example of an error when trying to access client-side objects with a server component](/README-imgs/server-component-error.png)
