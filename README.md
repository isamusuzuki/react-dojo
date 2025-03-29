# react-dojo 概要

React道場

作成日 2025/03/30

## 1. ファイル＆フォルダ構成

```text
--react-dojo/
    |--.devcontainer/ ... 開発コンテナの設定
    |--app/           ... アプリ本体
```

## 2. 開発コンテナの選択

[Dev Container Templates](https://github.com/devcontainers/templates) > [Node.js & JavaScript](https://github.com/devcontainers/templates/tree/main/src/javascript-node) > 22-bookworm を選択

VSCode > コマンドプロンプト > Dev Containers: "Add Dev Container Configuration Files ..." の選択肢にある

## 3. Viteでアプリ作成

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

## 4. アプリの開始

```bash
cd app
npm install
npm run dev
# ブラウザで `http://localhost:3000/`を開く
```
