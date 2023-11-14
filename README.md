# next-prisma-stripe-sample

app-router-sample のリポジトリです。

## Overview

Next.js App Router を案件で導入する前にある程度慣れた上で使用可否を判断したいので作成しました。

- React Sever Component のログ  
  　[【key-front】React Server Component（RSC）をまとめる](https://zenn.dev/shuuuuuun/scraps/7b2aaf746aec91)
- Next.js App Router のログ  
  　[【key-front】Next.js App Router の素振り（ディレクトリ構成・CSS 選定・Composition パターン）](https://zenn.dev/shuuuuuun/scraps/9cd8d4c0a7be87)
- CSS Modules を採用した背景  
  　[【key-front】React における CSS のベストプラクティスについて議論してみた](https://zenn.dev/shuuuuuun/scraps/744aa994686183)

## 環境

```
frontend：Next.js App Router, TypeScript
css：CSS Modules, ITCSS
backend：Next.js API Routes
orm：Prisma
db：SQLite
```

## Installation

- clone

```bash
$ git clone git@github.com:1zumisawashun/app-router-sample.git
$ cd app-router-sample
```

- install

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run dev
```

http://localhost:3000/

- 上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## How to

- フォーマットを効かせる

```bash
$ npm run lint
```

## Troubleshoot

- なし

## その他ドキュメント

See [Configuration Reference](https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
