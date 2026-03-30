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
