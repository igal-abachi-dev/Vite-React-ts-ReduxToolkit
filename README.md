# React 18 (+ Vite + Yarn PnP + Redux Toolkit + TypeScript + vanilla-extract + Router v6) Project starter template

## stack:

[React 18](https://reactjs.org/)


[Vite 2.9](https://vitejs.dev/guide/why.html)


[Yarn Berry Plug'n'Play / Zero install](https://yarnpkg.com/features/pnp)


[Redux Toolkit](https://redux-toolkit.js.org/)


[TypeScript 4](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)


[vanilla-extract css](https://vanilla-extract.style/documentation/)


[React Router DOM v6](https://reactrouter.com/docs/en/v6/getting-started/tutorial)


[Axios async-await](https://axios-http.com/docs/intro)

----

## pre install:

(install node latest LTS)

(npm i yarn -g)

----
## create proj: (yarn v3 Pnp):

(npx) yarn create vite react-app --template react-ts

cd react-app

(npx yarn set version stable)

(npx) yarn

(npx) yarn add -D sass

(npx) yarn add -D vite-plugin-svgr


(npx) yarn dev

(npx) yarn build

----------

yarn add prop-types react-redux @reduxjs/toolkit

yarn add -D @types/node @types/prop-types @types/react-redux

yarn add axios qs

yarn add @vanilla-extract/css  vanilla-classnames

yarn add -D @vanilla-extract/vite-plugin

yarn add lodash luxon react-router-dom

yarn add -D @types/lodash @types/luxon


----------

## deploy:
https://vitejs.dev/guide/static-deploy.html#vercel-for-git

static export:
https://vitejs.dev/guide/ssr.html#pre-rendering-ssg

ssg script:
https://github.com/vitejs/vite/blob/main/playground/ssr-react/prerender.js
