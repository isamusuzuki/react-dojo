# 写経

『これからはじめるReact実践入門』を写経する

作成日 2025/10/10

## 1. 書籍情報

『これからはじめるReact実践入門～コンポーネントの基本からNext.jsによるアプリ開発まで』

山田祥寛 著、SBクリエイティブ 2023年 発行

## 2. 書籍との違い

- 書籍が薦めていた`create-react-app`は、2025年1月に非推奨になった。時の移り変わりはとにかく早い
- したがって、アプリの作成にはViteを使った
- 最初からTypeScriptを利用している
- Tailwind CSSを採用している

## 3. 写経コード一覧

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
