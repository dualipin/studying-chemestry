export type TGameCard = Partial<{
  id: number
  name: string
  formula: string
  symbol?: string
  atomicNumber?: number
  category?: string
  funFact?: string
  type: 'element' | 'compound'
  icon: string
  isFlipped?: boolean
  isMatched?: boolean
}>
