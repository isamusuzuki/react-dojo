# react-dojo 概要

React道場、『これからはじめるReact実践入門』を写経する

作成日 2025/03/30、更新日 2025/05/06

## 1. ファイル＆フォルダ構成

```text
--react-dojo/
    |--.devcontainer/
    |   `--devcontainer.json ... 開発コンテナの設定
    `--app/
        |--public/        ... 公開フォルダ
        |--src/           ... ソースコードの置き場
        |  |--components/ ... コンポーネントファイルの置き場
        |  |--input/      ... データファイルの置き場
        |  |--App.tsx     ... コンポーネントの親玉
        |  |--index.css   ... たったひとつのCSSファイル
        |  `--main.tsx    ... コンポーネントを表示するためのルートを作成
        |--index.html     ... たったひとつのHTMLファイル
        `--package.json   ... 設定ファイル
```

## 2. 写経について

### 1a. 書籍情報

『これからはじめるReact実践入門～コンポーネントの基本からNext.jsによるアプリ開発まで』

山田祥寛 著、SBクリエイティブ 2023年 発行

### 1b. 書籍との違い

- 書籍が薦めていた`create-react-app`は、2025年1月に非推奨になった。時の移り変わりはとにかく早い
- したがって、アプリの作成にはViteを使った
- 最初からTypeScriptを利用している
- Tailwind CSSを採用している

### 1c. 写経コード一覧

| ページ | 単元                        | ファイル名         | 説明                  |
| -----: | --------------------------- | ------------------ | --------------------- |
|     84 | 3-1-2 Propsの基本           | MyHello.tsx        | `props`登場           |
|     89 | 3-1-4 Stateの基本           | StateBasic.tsx     | `useState()`登場      |
|     96 | 3-2-1 配列をリスト化する    | ForList.tsx        | `map()`登場           |
|    103 | 3-2-1 リストを絞り込む      | ForFilter.tsx      | `filter()`登場        |
|    104 | 3-2-1 リストをソートする    | ForSort.tsx        | `sort()`登場          |
|    132 | 3-3-6 子から親への情報伝達  | StateParent.tsx 他 | `props`に関数入れる   |
|    158 | 4-1-1 フォーム管理の基本    | StateForm.tsx      | スプレッド構文        |
|    161 | 4-1-3 非制御コンポーネント  | StateFormUC.tsx    | `useRef()`登場        |
|    184 | 4-2-3 配列の更新            | StateTodo.tsx      | 追加,更新,削除,ソート |
|    193 | 4-3-1 React Hook Formの基本 | FormBasic.tsx      | `useForm()`登場       |
|    204 | 4-3-4 検証ライブラリと連携  | FormYup.tsx        | `resolver`登場   |

## 3. 開発コンテナの選択

[Dev Container Templates](https://github.com/devcontainers/templates) > [Node.js & JavaScript](https://github.com/devcontainers/templates/tree/main/src/javascript-node) > 22-bookworm を選択

VSCode > コマンドパレット > Dev Containers: "Add Dev Container Configuration Files ..." の選択肢にある

## 4. Viteでアプリ作成

開発コンテナを起動

```bash
pwd
# /workspaces/react-dojo

cat /etc/os-release
# PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"

node --version
# v22.12.0

npm --version
# 10.9.0

npm create vite@latest

# Need to install the following packages:
# create-vite@6.3.1
# Ok to proceed? (y) 

# Project name:
# app

# Select a framework:
# React

# Select a variant:
# TypeScript

# Scafolding project in /workspaces/vuejs-vite-dojo/app...
# Done. Now run:
```

## 5. アプリの開始

```bash
cd app
npm install
npm run dev
# ブラウザで `http://localhost:3000/`を開く
```
