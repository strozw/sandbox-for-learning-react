# React を学習するためのサンドボックス

とりあえずコードを書いて試すための環境

## 環境構築

このリポジトリのコードを clone

```sh
git clone https://github.com/strozw/sandbox-for-learning-react.git
```

最新の `pnpm` をインストールした上で、

```sh
npm i -g pnpm@latest
```

clone したコードのディレクトリへ移動し、依存パッケージのインストールしてください。

```sh
cd sandbox-for-learning-react
pnpm install
```

## 学習環境

### React Foundations chapter 1 〜 8 を学習する

以下のページにアクセスし、
<https://nextjs.org/learn/react-foundations>

出てくるコードを以下のファイルに記述し、
`packages/react-foundations/index.html`

以下のコマンドで動作の確認を行ってください。

```bash
pnpm dev-react-foundations
```

### TypeScript を学習する

以下のコマンドで、`packages/ts` 以下で TypeScript のコードを試すための開発環境が起動します。
[読んで学ぶTypeScript](https://typescriptbook.jp/reference) に記載されているコードなどを試すのに利用します。

```bash
pnpm dev-ts
```

### Storybook を利用して React を学習する

以下のコマンドで、`packages/react-storybook` 以下で React のコードを試すための Storybook を用いた開発環境が起動します。

```bash
pnpm dev-react-storybook
```

`packages/react-storybook/stories/scratchpad/scratchpad.tsx`
