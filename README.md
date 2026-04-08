## セットアップエラー原因：

-package.json に "type": "module"がない
-npm i react react-domのインストールを忘れている

##　起動後ワーニング

root.tsx に notFoundComponentが設定されていない

createRootRoute に notFoundComponent  
 オプションを渡していないため、存在しないU
RLにアクセスした際に汎用の <p>Not  
 Found</p> が表示されます。

root.tsx に notFoundComponent  
 を追加（推奨）

## tRPCインストールコマンド

npm install @trpc/server @trpc/client @trpc/tanstack-react-query @tanstack/react-query

## Drizzleインストールコマンド

npm install drizzle-orm @neondatabase/serverless
npm install -D drizzle-kit

## `@unpic/react`（最も Next.js の Image に近い）

```bash
npm install @unpic/react
```

```tsx
import { Image } from '@unpic/react'

;<Image
  src="/images/logo.png"
  width={800}
  height={600}
  alt="Logo"
  priority // LCP画像に使用
/>
```

## Git ワークフロー

### PRマージ前に誤って次の作業を始めてしまった場合

1. **変更を一時退避**

   ```bash
   git stash
   ```

2. **GitHub で PR をマージ**（Confirm merge ボタンを押す）

3. **ローカルの main を最新化**

   ```bash
   git checkout main
   git pull
   ```

4. **新しいブランチを作成して変更を復元**

   ```bash
   git checkout -b 18-新しいブランチ名
   git stash pop
   ```

5. **作業完了後、コミット → プッシュ → PR作成**
   ```bash
   git add .
   git commit -m "コミットメッセージ"
   git push -u origin 18-新しいブランチ名
   ```
