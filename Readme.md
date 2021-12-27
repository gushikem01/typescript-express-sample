# TypeScript + nodemonで開発テスト+ API CleanArchtecture

### 最初にpackage.jsonの作成

```
npm init -y
```

### TypeScriptのビルド設定

VSCodeでTypeScriptコードをトランスパイルしてJavaScriptに変換する必要がある。

```
npm install typescript --save-dev
npm install @types/node --save-dev
```

### tsconfig.jsonを作成する

npx tsc --init

### TypeScriptのコードを監視する

```
npx tsx --watch
```

### nodemonのインストール

```
sudo npm install -g --force nodemon
```

```
nodemon ./build/main.js
```

### 開発効率の向上

* ターミナル1

```
npm run build:watch
```

* ターミナル2

nodemonコマンドを使って、Nodeサーバーを起動しておくと、JSコードが生成されるたびに自動的にサーバーを再起動してくれる。

```
nodemon ./build/main.js
```

### Express

```
npm install express --save
npm install -D @types/express
```

### サーバー起動

```
npx ts-node ./src/infrastructure/server.ts
※ホットリロードが効く
npx ts-node-dev ./src/infrastructure/server.ts
```

* http://localhost:8888/api/tasks/

```
[{"id":1,"name":"task1..."},{"id":2,"name":"task2"},{"id":3,"name":"task3"}]
```

### hotreload

```
touch .node-dev.json
{
  "notify": false
}
```

### 参考サイト

* インストール方法

https://maku.blog/p/ak7u3h3/

* clean-architecture

https://blog.spacemarket.com/code/clean-architecture-node/
