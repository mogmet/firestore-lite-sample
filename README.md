# firestore lite検証サンプル

普通のやつとliteのやつでどれくらいパフォーマンス変わるかのチェックをしてみた。

詳細は[qiitaの記事を参照](https://qiita.com/mogmet/items/10bd35aed9f9494e1c28)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
