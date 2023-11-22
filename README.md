# app router sample

app-router-sample のリポジトリです。

# TODO

- prisma で category プロパティの追加
- prisma で src プロパティの追加
- storybook の追加
- react-hook-form の追加

## Overview

Next.js App Router を案件で導入する前にある程度慣れた上で使用可否を判断したいので作成しました。

- React Sever Component のログ  
  [【key-front】React Server Component（RSC）をまとめる](https://zenn.dev/shuuuuuun/scraps/7b2aaf746aec91)
- Next.js App Router のログ  
  [【key-front】Next.js App Router の素振り（ディレクトリ構成・CSS 選定・Composition パターン）](https://zenn.dev/shuuuuuun/scraps/9cd8d4c0a7be87)

ITCSS を CSS 設計の骨子として CSS Modules との共存を模索しました。

- CSS Modules を採用した背景  
  [【key-front】React における CSS のベストプラクティスについて議論してみた](https://zenn.dev/shuuuuuun/scraps/744aa994686183)

tsconfig/bases を案件で導入する前にある程度慣れた上で使用可否を判断したいので導入しました。

- tsconfig/bases のログ  
  [【key-front】tsconfig/bases のすゝめ](https://zenn.dev/shuuuuuun/scraps/48ac73aeb3076c)

その他

- zod の導入  
  今まで yup を使っていたので zod を使用してみて差分を見るため

- envalid の導入  
  env ファイルの健全化を検証するため

- [happy-css-modules](https://www.mizdra.net/entry/2022/11/14/102506) の導入  
  堅牢な CSS Modules を構築するため

## 環境

```
frontend: Next.js App Router, TypeScript
css: CSS Modules, Sass
backend: Next.js API Routes
orm: Prisma
db: SQLite
catalog: Storybook
library: zod, envalid, happy-css-modules, SWR, react-hook-form
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

- なし
