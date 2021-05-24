export interface OverviewData {
  circSupply?: string
  curPrice?: number
  nextRebase?: number
  scalingFactor?: number
  targetPrice?: number
  totalSupply?: string
}

export const TableSchema = [
  {
    id: 1,
    name: 'market',
    sortable: true,
    label: 'Market',
  },
  {
    id: 2,
    name: 'indexPrice',
    sortable: true,
    label: 'Index Price',
  },
  {
    id: 3,
    name: '24hChange',
    sortable: true,
    label: '24h Change',
  },
  {
    id: 4,
    name: '1hFunding',
    sortable: true,
    label: '1h Funding',
  },
  {
    id: 5,
    name: 'openInterest',
    sortable: true,
    label: 'Open Interest',
  },
  {
    id: 6,
    name: '24hVolume',
    sortable: true,
    label: '24h Volume',
  },
  {
    id: 7,
    name: '24hTrades',
    sortable: true,
    label: '24h Trades',
  }
]