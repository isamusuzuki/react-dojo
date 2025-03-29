# 『これからはじめるReact実践入門』を写経する

作成日 2025/03/30

## 1. 写経について

### 1a. 書籍情報

『これからはじめるReact実践入門～コンポーネントの基本からNext.jsによるアプリ開発まで』
山田祥寛 著、SBクリエイティブ 2023年 発行

### 1b. 書籍との違い

- 書籍が薦めていた`create-react-app`は、2025年1月に非推奨になった。時の移り変わりはとにかく早い
- したがって、アプリの作成にはViteを使った
- 最初からTypeScriptを使っている

## 2. ファイル＆フォルダ構成

```text
--app/
  |--src/
  |  |--components/
  |  |  `--MyHello.tsx    ... P084 3-1-2 Propsの基本
  |  |  `--StateBasic.tsx ... P089 3-1-4 Stateの基本
  |  |--App.tsx
  |  `--main.tsx
  `--index.html
```