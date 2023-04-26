# Reactでモーダルウィンドウ

 - components/elementsディレクトリ下にモーダルコンポーネント
 - hooksにカスタムフックuseModal作成。
     - 開閉ロジックを真偽値で状態管理。
     - useCallbackでOpenまたはCloseがクリックされた時にモーダル開閉状態の真偽値をセット。
