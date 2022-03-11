# UmaPositioningMap

ウマ娘のポジショニングマップ

## 作るもの

ウマ娘のポジショニングマップ  
ポジショニングマップとは2次元の軸に項目を配置したもの
属性を視覚的に見せやすくする  

## UI設計

縦軸の矢印、横軸の矢印

縦軸の名前入力欄、横軸の名前入力欄

配置する画像（これをどう並べておくかがポイント）

画像検索ボタン（できれば）

リセットボタン

画像化ボタン（できれば）

## 設計

### プロット場所について
- プロット場所、画像待機場所をどのようにするかがポイント
- クソでかい画像で用意してしまうのもあり

### 画像のZ軸について
- Z軸をどのようにするか？
    - ダブルクリックを検出可能
    - ダブルクリップした場合、要素を最後尾に配置するようにする
        - DOMの修正が必要
- 完全に決め打ちにしておくのもあり

### 画像サイズ
- 名前入り 161x263
- アイコン画像 400x400
    - 縮小して使用する
- 画像サイスを変更可能にする

## 参考サイト

### interact.js
https://interactjs.io/

#### スマホ対応
CSSにて、touch-action: none; が大切、忘れずに  

### bootstrap
https://getbootstrap.jp/docs/5.0/getting-started/introduction/

#### マージンとパディング
m-0はマージンを意味する  
p-0はパディングを意味する  

#### ブレークポイントとグリッドについて
https://getbootstrap.jp/docs/5.0/layout/grid/

col-xxx-nという表記としている場合、xxxがそのカラムの最小サイズとなる  
画面がそれより小さくなると、二列目に移行する  

#### コンテナサイズ
https://getbootstrap.jp/docs/5.0/layout/containers/

100%widthとなっている場合は、ブラウザ幅に従いじわじわと拡大縮小される  
デフォルトではカクカクとサイズが区切りで大きく、小さくなっていく 

#### 絶対配置
https://getbootstrap.jp/docs/5.0/utilities/position/

これを使用して配置する

### Vue.js
https://jp.vuejs.org/v2/guide/index.html

### Konva（使ってない）
https://konvajs.org/

