# Portfolio Redesign Spec — Kosei Idezuka

## Overview
portfolioリポジトリ（kosei-w/portfolio）を全面リデザイン。
HIGHERサイト（ベージュ・セリフ・1ページ構成）とは完全に差別化する。

## デザイン方針
- **テーマ**: ダーク（`#0A0A0A`ベース）
- **タイポグラフィ**: モノスペース（`JetBrains Mono` or `IBM Plex Mono`）+ ゴシック系sans-serif（`Noto Sans JP`）
- **アクセントカラー**: コーラルオレンジ `#D85A30`
- **テキストカラー**: メイン `#E8E6E0`、サブ `rgba(255,255,255,0.4)`
- **ボーダー**: `rgba(255,255,255,0.06)` 極細ライン
- **アニメーション**: ミニマル。フェードイン + スライドアップ。GSAP不要、CSS transitionで十分
- **CustomCursor**: 既存のものを維持

## ページ構成（5ページ、App Router）

### 1. Home（`/`）— app/page.tsx
- **Nav**: ロゴ「KI」左、リンク右（WORKS / ABOUT / CONTACT）
- **Hero**: 
  - タグライン: `FREELANCE WEB DESIGNER`（11px, letter-spacing: 3px, 薄い白）
  - 名前: `Kosei Idezuka`（48px, sans-serif, 白）
  - 役割: `Web Design / Development / Consulting`（16px, 薄い白）
  - 区切り線: 40pxの白い細線
  - 説明文: `Next.js + Tailwind CSS + Vercel. Helping businesses in Japan build modern, high-performance web experiences.`
- **Works Preview**: 2カラムグリッド
  - HIGHER LLC カード（サムネイル画像 + タイトル + 年度）→ `/works/higher` にリンク
  - Coming Soon カード（opacity: 0.4）
- **CTA**: `Let's build something together.` + `GET IN TOUCH` ボタン → `/contact`

### 2. Works一覧（`/works`）— app/works/page.tsx
- タイトル: `Works`
- カード型グリッド（2カラム）
- 各カードにホバーエフェクト（背景色変化 + スケール微増）
- カードクリックで各ケーススタディ詳細へ

### 3. Case Study詳細（`/works/higher`）— app/works/higher/page.tsx
**これが最重要ページ**
- **ヒーロー**: プロジェクト名 + クライアント名 + 年度 + 役割
- **セクション構成**:
  1. **Overview**: プロジェクト概要（1段落）
  2. **Challenge**: クライアントの課題
  3. **Approach**: 解決アプローチ
  4. **Tech Stack**: 使用技術（Next.js, Tailwind CSS, Vercel, MongoDB）をアイコン付きで
  5. **Result**: 成果・結果
  6. **Screenshots**: サイトのスクリーンショット（大きく表示）
  7. **Learnings**: 学んだこと
- スクリーンショットは `public/images/works/higher/` に配置
- 背景は `#0A0A0A` 維持
- セクション間に薄いボーダーライン

### 4. About（`/about`）— app/about/page.tsx
- **プロフィール**: 名前 + 写真（あれば）+ 簡単な自己紹介
- **強み**: コンサルティブセールス × Web制作の掛け合わせ
- **Tech Stack**: アイコングリッド（Next.js, React, Tailwind, Vercel, MongoDB, GitHub）
- **Experience**: 簡潔な経歴タイムライン

### 5. Contact（`/contact`）— app/contact/page.tsx
- **見出し**: `Let's work together.`
- **フォーム**: 名前 / メール / メッセージ（既存のMongoDB API連携を流用）
- **メールリンク**: `Kosei.idezuka@navislab.jp`
- ダークテーマに合わせたフォームスタイリング

## 技術仕様
- **フレームワーク**: Next.js (App Router) — 既存構成を維持
- **スタイリング**: Tailwind CSS
- **フォント**: Google Fonts — `JetBrains Mono`（見出し・ラベル）+ `Noto Sans JP`（本文）
- **デプロイ**: Vercel（自動デプロイ、pushで反映）
- **既存コンポーネント維持**: LoadingScreen, CustomCursor

## ファイル構成
```
app/
  layout.tsx          ← フォント変更 + ダークテーマ適用
  page.tsx            ← Home
  globals.css         ← ダークテーマCSS変数
  works/
    page.tsx          ← Works一覧
    higher/
      page.tsx        ← HIGHER ケーススタディ
  about/
    page.tsx          ← About
  contact/
    page.tsx          ← Contact（既存フォームロジック流用）
components/
  Header.tsx          ← 共通ナビゲーション
  Footer.tsx          ← 共通フッター
  CustomCursor.tsx    ← 既存維持
  LoadingScreen.tsx   ← 既存維持（背景を#0A0A0Aに変更）
  WorkCard.tsx        ← Works用カードコンポーネント
  SectionTitle.tsx    ← セクション見出し共通コンポーネント
public/
  images/
    works/
      higher/         ← HIGHERサイトのスクリーンショット
```

## Tailwind カスタムカラー（tailwind.config.ts に追加）
```js
colors: {
  dark: {
    bg: '#0A0A0A',
    surface: '#141414',
    border: 'rgba(255,255,255,0.06)',
  },
  accent: '#D85A30',
  text: {
    primary: '#E8E6E0',
    secondary: 'rgba(255,255,255,0.4)',
    muted: 'rgba(255,255,255,0.15)',
  }
}
```

## 実装の優先順位
1. `layout.tsx` + `globals.css`（ダークテーマ基盤）
2. `Header.tsx` + `Footer.tsx`（共通パーツ）
3. `page.tsx`（Home）
4. `works/higher/page.tsx`（ケーススタディ ← 最重要）
5. `works/page.tsx`（Works一覧）
6. `about/page.tsx`
7. `contact/page.tsx`（既存ロジック移植）
8. git push → Vercel自動デプロイ
