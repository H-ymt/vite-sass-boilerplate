# Vite x Sass × Vanilla JavaScript Boilerplate

## 概要

Viteを使用した、静的サイト制作のためのボイラープレートです。

## スクリプト

- `pnpm dev`: 開発サーバーを起動します。
- `pnpm build`: プロジェクトをビルドします。
- `pnpm preview`: ビルドしたプロジェクトをプレビューします。
- `pnpm format`: ソースコードをフォーマットします。
- `pnpm lint`: MarkupLint, ESLint, StyleLintを実行します。

## 特徴

このボイラープレートでは次の機能が含まれています。

- [MarkupLint](https://markuplint.dev/ja/): HTML構文をチェックします。

- [StyleLint](https://stylelint.io/)：CSS, Sassの静的解析及び構文チェックを行います。

- [ESLint](https://eslint.org/)：JavaScriptの静的解析を行います。

- [Prettier](https://prettier.io/)：コードのフォーマットを行います。

- [Handlebars](https://handlebarsjs.com/):シンプルなテンプレートエンジンです。

- 画像圧縮のプラグインを入れる場合は[こちら](https://flex-box.net/vite-for-coder/#co-index-7)

## 開発の仕方

### コマンド

- [リポジトリ](https://github.com/H-ymt/vite-sass-boilerplate)をクローン

```sh
git clone https://github.com/H-ymt/vite-sass-boilerplate
```

- パッケージのインストール

```sh
pnpm install
```

- 開発サーバーを起動

```sh
pnpm dev
```

- プロジェクトをビルドする

```sh
pnpm build
```

- ビルドしたプロジェクトをプレビュー

```sh
pnpm preview
```

### テンプレートエンジン

テンプレートエンジンに[Handlebars](https://handlebarsjs.com/)を導入しています。
`src/components`ディレクトリ配下にサイト共通のコンポーネント(ヘッダー等)を記述し`{{> header}}`で呼び出すことができます。

### 画像の読み込み

画像は絶対パス（`/public/images/javascript.svg`）で書きます。（相対パスだとサブディレクトリの`/contact/index.html`ファイルなどで画像が表示されません。）
