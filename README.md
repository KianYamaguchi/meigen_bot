# React_practice

このプロジェクトは、React と Node.js（Express）を使った名言チャットボットの練習用アプリです。

## 構成

- **フロントエンド**: React（`my-app`フォルダ）
- **バックエンド**: Node.js + Express（`api`フォルダ）

## セットアップ方法

### フロントエンド

1. `my-app`フォルダに移動
   ```
   cd my-app
   ```
2. 依存パッケージをインストール
   ```
   npm install
   ```
3. 開発サーバーを起動
   ```
   npm start
   ```
4. ブラウザで `http://localhost:3000` にアクセス

### バックエンド

1. `api`フォルダに移動
   ```
   cd api
   ```
2. 依存パッケージをインストール
   ```
   npm install
   ```
3. サーバーを起動
   ```
   npm start
   ```
4. API は `http://localhost:8080` で動作

## 主な機能

- チャットボット（React）
- 「名言」と入力すると名言 API から名言を取得して返答
- 会話履歴の表示

## 備考

- バックエンド経由で外部 API（名言 API）と連携しています。
- CORS 対策のため、フロントから直接 API を呼ばず、Express サーバーを経由しています。

---
