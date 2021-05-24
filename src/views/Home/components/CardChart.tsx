import React from 'react'
import styled from 'styled-components'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { Text, Card, CardBody } from '@pancakeswap/uikit'

const FlexContainer = styled.div`
  display: flex;
`
const WrapperLeft = styled.div`
  flex: 0 0 300px;
  border-right: solid 1px;

  .portfolio-value {
    padding: 20px;
    border-bottom: solid 1px;

    .title {
      margin-bottom: 16px;
    }

    .value {
      font-size: 26px;
      font-weight: bold;
    }
  }

  .title {
    font-size: 13px;
    margin-bottom: 8px;
  }
`
const AnalysisFlexContainer = styled(FlexContainer)`
  flex-direction: column;

  .row {
    display: flex;
    border-bottom: solid 1px;

    &:last-child {
      border-bottom: none;
    }

    .data {
      flex: 1;
      border-right: solid 1px;
      padding: 20px;

      &:last-child {
        border-right: none;
      }
    }
  }
`
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]
const renderLineChart = (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: 5 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#9fd884" />
      <Line type="monotone" dataKey="amt" stroke="#d8d284" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);
const CardChart = () => {
  return (
    <Card>
      <CardBody>
        <FlexContainer>
          <WrapperLeft>
            <div className="portfolio-value">
              <Text className="title">Portfolio Value</Text>
              <Text className="value" color="secondary">$0.00</Text>
              <Text className="trending">
                <span>$0.00 </span>
                Past Week
              </Text>
            </div>
            <AnalysisFlexContainer>
              <div className="row">
                <div className="data margin-usage">
                  <p className="title">Margin Usage</p>
                  <p className="value">-</p>
                </div>
                <div className="data free-collateral">
                  <p className="title">Free Collateral</p>
                  <p className="value">-</p>
                </div>
              </div>
              <div className="row">
                <div className="data leverage">
                  <p className="title">Leverage</p>
                  <p className="value">-</p>
                </div>
                <div className="data buying-power">
                  <p className="title">Buying Power</p>
                  <p className="value">-</p>
                </div>
              </div>
            </AnalysisFlexContainer>
          </WrapperLeft>
          {renderLineChart}
        </FlexContainer>
      </CardBody>
    </Card>
  )
}

export default CardChart;
