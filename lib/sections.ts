/** ページの目次。ヘッダーとスマホのメニューが同じ並びを使う */
export const SECTIONS = [
  { id: 'profile', label: 'PROFILE' },
  { id: 'now', label: 'NOW' },
  { id: 'story', label: 'STORY' },
  { id: 'vision', label: 'VISION' },
  { id: 'contact', label: 'CONTACT' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
