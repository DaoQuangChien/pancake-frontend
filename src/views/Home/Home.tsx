import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout } from '@pancakeswap/uikit'
// import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import CardChart from './components/CardChart'
import CardTradingNow from './components/CardTradingNow'
import MarketsTable from './components/MarketsTable'
import { TableSchema } from './types'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > .card-trading-now {
    grid-column: span 4;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > .card-trading-now {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > .card-trading-now {
      grid-column: span 4;
    }
  }
`
const StyledRow = styled.div`
  margin-bottom: 16px;
`

const tradingNowData = [
  {
    image: '/images/tokens/bnb.png',
    tokenName: 'Binance',
    data: {
      value: 20.00,
      percentage: '10%'
    }
  },
  {
    image: '/images/tokens/CAKE.png',
    tokenName: 'Cake',
    data: {
      value: 40.00,
      percentage: '30%'
    }
  },
]
const marketsData = [
  {
    market: 'eth',
    indexPrice: '$2,397.89',
    '24hChange': '23.12%',
    '1hFunding': '0.000012%',
    openInterest: '2,114.04',
    '24hVolume': '$29,546,211',
    '24hTrades': '3.346'
  },
  {
    market: 'usdt',
    indexPrice: '$2,397.89',
    '24hChange': '23.12%',
    '1hFunding': '0.000012%',
    openInterest: '2,114.04',
    '24hVolume': '$29,546,211',
    '24hTrades': '3.346'
  }
]
const Home: React.FC = () => {
  // const { t } = useTranslation()

  return (
    <Page>
      <StyledRow>
        <CardChart />
      </StyledRow>
      <StyledRow>
        <Cards>
          {tradingNowData.map(data => <CardTradingNow {...data} key={data.tokenName} />)}
        </Cards>
      </StyledRow>
      <StyledRow>
        <Heading scale="xl">Markets</Heading>
        <MarketsTable data={marketsData} columns={TableSchema} />
      </StyledRow>
    </Page>
  )
}

export default Home
