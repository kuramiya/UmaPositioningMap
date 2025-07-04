# UmaPositioningMap

ウマ娘のポジショニングマップ

## 更新情報

### 2025/06/27

タッカーブライン追加

### 2025/05/25

ステイゴールド追加

### 2025/02/22

アーモンドアイ、カレンブーケドール、グランアレグリア、クロノジェネシス、スピードシンボリ、セントライト、ハイセイコー、フェノーメノ、ラヴズオンリーユー、ラッキーライラック追加（４周年）

### 2024/12/02

サクラチトセオー追加

### 2024/11/27

ブラストワンピース追加

### 2024/11/13

アイコンサイズ、機能、レイアウトなどを少し修正した。

### 2024/10/30

シュガーライツ追加

### 2024/09/27

フサイチパンドラ追加

### 2024/08/24

バブルガムフェロー追加

### 2024/06/24

カルストンライトオ、デュランダル、ドリームジャーニー、ビリーヴ、ブエナビスタ追加

### 2024/02/22

ウィンバリアシオン、エスポワールシチー、オルフェーヴル、ジェンティルドンナ、スティルインラブ、ソノンエルフィー、ダンツフレーム、トランセンド、ノーリーズン、都留岐涼花追加

### 2024/02/04

ラインクラフト、エアメサイア、デアリングハート追加

### 2024/01/26

シーザリオ追加

### 2023/12/20

ロイスアンドロイス追加

### 2023/11/20

サムソンビッグ追加

### 2023/11/16

ヴィブロス、ヴィルシーナ追加

### 2023/10/05

ドゥラメンテ追加

### 2023/09/17

ノースフライト追加

### 2023/08/23

2.5周年ハフバの発表でサウンズオブアース、新シナリオ（凱旋門賞）関連キャラを追加

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

