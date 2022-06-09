pre install:

(install node latest LTS)

(npm i yarn -g)

----
create proj: (yarn v3 Pnp):

(npx) yarn create vite react-app --template react-ts

cd react-app

(npx yarn set version stable)

(npx) yarn

(npx) yarn add -D sass

(npx) yarn dev

(npx) yarn build

----------

deploy:
https://vitejs.dev/guide/static-deploy.html#vercel-for-git

static export:
https://vitejs.dev/guide/ssr.html#pre-rendering-ssg

ssg script:
https://github.com/vitejs/vite/blob/main/playground/ssr-react/prerender.js
