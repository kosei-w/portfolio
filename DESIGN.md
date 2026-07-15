# DESIGN.md — 黄泉ワールド（Yomi-Strike）デザインシステム

> Source of truth。ページ・コンポーネントを書く前にここを読む。
> 視覚言語の原典は `components/Loader/loader.css`（黄泉の稲妻ローダー——**改変禁止**）。
> 構成思想は NOT A HOTEL の翻訳：メディア主役・巨大タイポ×極小UI・スクロールで物語る・最小クローム。

## コンセプト

ローダーは「黄泉の世界の扉」。パネルが割れた先のサイト本体は、同じ言語——赤の一閃、
マスクreveal、モノカウンター、セリフ混植——で作られた黄泉の世界そのもの。

感情の設計（apple-design §16 Delight）: **シネマティック・緊張感・静かな自信**。

## トークン（app/globals.css @theme）

### 色
| Token | 値 | 用途 |
|---|---|---|
| `bg` | `#0A0A0A` | 背景 |
| `surface` | `#141414` | カード・入力・反転セクション |
| `line` | `rgba(255,255,255,0.08)` | 1px区切り線 |
| `ink` | `#E8E6E0` | 見出し・強調テキスト |
| `ink-muted` | `rgba(255,255,255,0.62)` | 本文（コントラスト約7:1） |
| `ink-faint` | `rgba(255,255,255,0.45)` | 極小ラベルの下限。**これ未満をテキストに使わない** |
| `accent` | `#E53935` | 赤。線・マーク・フォーカスリング主体 |
| `accent-hot` | `#FF3B30` | ストライク中心・グロー用 |

- 赤をテキストに使うのは`text-meta`以上のサイズのみ（#E53935≒5.3:1）。11pxラベルでは装飾（線・マーク）に留める
- グロー: `box-shadow: var(--glow-accent)`（ローダーseamと同値）

### 型スケール（lh/ls内包——インラインstyleでfontFamily/clamp指定禁止）
| Utility | 用途 | 実体 |
|---|---|---|
| `text-label font-mono` | 極小UIラベル・eyebrow | 11px / ls 0.3em |
| `text-meta font-mono` | メタ情報・年次・カウンター補助 | 12px / ls 0.15em |
| `text-body` | 和文本文 | 15px / lh 1.8 / ls 0.02em |
| `text-lead` | リード文 | clamp 18〜22px / lh 1.6 |
| `text-title` | セクション見出し | clamp 32〜56px / lh 1.1 / ls -0.02em |
| `text-display` | ページヒーロー（全ページ共通） | clamp 48〜128px / lh 1.0 / ls -0.03em |
| `text-counter font-display font-extralight` | 大型数字（価格・実績値） | clamp 40〜80px / ls -0.03em ＝ローダーカウンター言語 |

### フォント
| Utility | 書体 | 役割 |
|---|---|---|
| `font-mono` | JetBrains Mono | UIラベル・ナビ・メタ |
| `font-sans` | Noto Sans JP | 和文本文 |
| `font-display` | Inter (Light/ExtraLight) | 巨大見出し・数字＝ローダーbrand/counter書体 |
| `font-serif` | Shippori Mincho | アクセント混植。**イタリックは欧文のみ**（Shipporiに真のイタリック無し。和文は正体） |

### スペーシング・コンテナ
- セクション縦リズム: `py-s5`（基本）/ `py-s6`（ヒーロー級）。s1〜s6はclamp流体
- コンテナ: `max-w-shell mx-auto px-6 md:px-10`（75rem）
- フルブリード: コンテナの外に置く（ShowcaseRow）

### モーション
- easing: `var(--ease-out-expo)`（基本・transitionデフォルト）/ `var(--ease-strike)`（一閃）
- **transform / opacity / clip-path 以外をアニメしない**（リフロー禁止。apple-design §11）
- :active即時フィードバック: `active:scale-[0.97]` + `duration-100`（Button内蔵。apple-design §1）

## モーション語彙（globals.cssプリミティブ + components/motion/InView）

| クラス | 動き | 由来 |
|---|---|---|
| `.reveal-wrap > .reveal-line` | 下から120%突き上げ | ローダーVision |
| `.rise` | フェード+24pxリフト | 汎用 |
| `.media-reveal` | clip-pathワイプ+内側ズーム戻し | my-client-site移植 |
| `.strike-line` | 赤の一閃 scaleX(0→1)+グロー | ローダーstreak |
| `.hero-reveal`配下の`.reveal-line` | ローダーパネル分割と連続してreveal | `body:not(.is-loading)`契約 |

- 駆動は`<InView>`（IntersectionObserver、once、2秒フォールバック）が`.is-inview`を付与
- スタガーは`--reveal-delay`CSS変数（InViewのstaggerプロップ）
- **安全装置**: 初期非表示は「`html.js`×`prefers-reduced-motion: no-preference`」の時のみ。
  JS無効・reduced-motion・SSR素のHTMLでは常に全文表示

## 不変の契約

1. `components/Loader/*` は改変禁止
2. `body.is-loading` / `body:not(.is-loading)` セレクタはLoaderとの契約——変更禁止
3. reduced-motion / reduced-transparency の等価表示を全モーションに用意する
4. `:focus-visible`リングを消さない（`focus:outline-none`単体は禁止）
5. コピー・IA（営業出身×AI-nativeポジショニング）はデザイン都合で変えない

## セクション規約

- 連番ラベル: `<SectionHeading no="01" label="OVERVIEW" />`（mono極小+赤マーク）
- 区切り: `border-t border-line`（1px）。強調の区切りは`<StrikeLine />`
- CTA: `<Button variant="outline|fill">`のみ使用（直書き禁止）
