# DESIGN.md — 開拓進行形

> Source of truth。ページ・コンポーネントを書く前にここを読む。

## コンセプト

霧の中の宇宙飛行士。光の柱を背に身を潜める（写真A）→ スクロールで霧の奥の惑星へ、背中で進んでいく（写真B）。
人物サイト（ポートフォリオ）として、**最初の画面で「誰が・何をしている人か」まで言い切る**。

## 構成（1ページ）

| # | id | 中身 | 背景 |
|---|---|---|---|
| — | `top` | 「Pioneering, in progress.」／名前／4つの肩書き | 写真A |
| 01 | `profile` | 自己紹介3行＋項目一覧 | 写真B（`data-stage="walk"`） |
| 02 | `now` | 会社員の仕事＋個人の3つの活動を文章で（「本業」とは書かない。ギフトショップは店名を出さない） | 写真B |
| 03 | `story` | 就活から今までを文章で（「今までの人生、何点ですか？」だけ白を一段上げる） | 写真B |
| 04 | `vision` | いちばんやりたい2つ（日本発のPayPalマフィア・シエスタの国産化）→ その入り口の場づくり（店舗数は今は出さない） | 写真B＋夜明け（`data-stage="dawn"`） |
| 05 | `contact` | メール＋フォーム | 写真B＋夜明け |

- 目次は `lib/sections.ts` が唯一の定義。ヘッダー（デスクトップ）と MENU（スマホ）が同じ並びを使う
- セクションは `components/sections/Section.tsx` の骨格（番号と線 → 英字の見出し → 和文のリード → 中身）で、**左の1列（最大36rem）**に積む。右側は背景の宇宙飛行士のために空ける

## 書体

| 役割 | 書体 | ユーティリティ |
|---|---|---|
| 英字の見出し（ヒーロー・セクション名） | Geist 500 | `font-display text-statement` / `text-title` |
| 和文（見出し・本文） | Zen Kaku Gothic New 400 / 500 | `font-sans text-headline` / `text-lead` / `text-body` |
| ラベル | Geist Mono | `font-mono text-label` |

- 和文を太くしない（500まで）。太い和文は写真の繊細さとぶつかる
- 和文はBudouX（`components/Phrase.tsx`）＋ `.phrase` で文節改行。語の途中で折らない
- NOWとSTORYは一覧・年表・大きな数字にせず、文章で読ませる

## 色

| Token | 値 | 用途 |
|---|---|---|
| `bg` | `#0c0d0f` | 地色（霧のグラファイト） |
| `ink` | 白 .88 | 見出し・強調 |
| `ink-2` | 白 .72 | 本文 |
| `ink-3` | 白 .50 | ラベル・補足 |
| `line` | 白 .14 | 1pxの区切り線 |
| `dawn` | `#ff7a3d` | **夜明けの光だけ**。VISION以降の背景に重ねる |

- 写真はモノクロに焼き込む（`scripts/prepare-images.mjs`）。色は写真に持たせず、夜明けの光だけCSSで重ねる
- 階層は白の不透明度3段で作る。色を足して階層を作らない

## 演出（`components/stage/Stage.tsx` ＋ `globals.css` の `.stage`）

- スクロール量を `--t`（A→Bの転換）/ `--walk`（Bの中を奥へ）/ `--dawn`（夜明け）のCSS変数に変換するだけ。Reactの再描画なし
- 動かすのは `transform` と `opacity` だけ
- A：20秒で往復する静かな寄り。転換時は手前に抜けるように拡大しながら消える
- B：霧の中から現れ、スクロールに合わせて奥へ寄る（背中を追うカメラ）
- 霧：横に継ぎ目なくループするテクスチャを2層、速さを変えて流す
- `prefers-reduced-motion`：寄り・抜け・霧の流れを止め、シーンは重なりの入れ替えだけ

## やらないこと

- 座標・緯度経度・HUD風の飾り表記、光るノード、グリッチ、粒子が文字に集まる演出
- 全要素一律の角丸＋影、カードの箱。区切りは1pxの線だけ
- 煽り語・絵文字
- メモに無い事実（年号・店名・数字）を作ること

## 素材

- 写真A・B：Alex Shuper（Unsplash License）。元データは `assets-src/`（git管理外）、`node scripts/prepare-images.mjs` で `public/images/` と `app/opengraph-image.jpg` を書き出す
- フッターに「PHOTOS: ALEX SHUPER / UNSPLASH」を残す
