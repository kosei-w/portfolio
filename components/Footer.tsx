/** 著作権表示と写真のクレジットだけ */
export default function Footer() {
  return (
    <footer className="content-layer px-6 pb-8 pt-16 md:px-12">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-2 border-t border-line pt-6 font-mono text-label text-ink-3 sm:flex-row sm:justify-between">
        <p>© 2026 KOSEI IDEZUKA</p>
        <p>
          PHOTOS:{' '}
          <a
            href="https://unsplash.com/@alexshuperart"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-500 hover:text-ink"
          >
            ALEX SHUPER / UNSPLASH
          </a>
        </p>
      </div>
    </footer>
  )
}
