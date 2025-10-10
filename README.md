# react-dojo 概要

React道場、『これからはじめるReact実践入門』を写経する

作成日 2025/03/30、更新日 2025/05/06

## 1. ファイル＆フォルダ構成

```text
--react-dojo/
    |--.devcontainer/ ... 開発コンテナの設定
    |--avocado/       ... Cloudflare > vite-react-template
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
