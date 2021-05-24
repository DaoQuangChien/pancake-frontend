import React from 'react';
import styled from 'styled-components'
import { ArrowForwardIcon, Card, CardBody, Text } from '@pancakeswap/uikit';

const StyledCard = styled(Card)`
  cursor: pointer;
`;
const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;

  .image-container {
    flex: 0 0 36px;
    margin-right: 12px;
  }

  .title {
    display: flex;
    flex-direction: column;

    .upper-title {
      display: flex;

      .arrow-icon {
        margin-left: 5px;
      }
    }
  }
`;
const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .value {
    font-size: 26px;
    font-weight: bold;
  }
`;
const CardTradingNow = ({ image, tokenName, data: { value, percentage } }) => {
  return (
    <StyledCard className="card-trading-now">
      <CardBody>
        <StyledCardHeader>
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="title">
            <Text className="upper-title">
              Start trading now
              <ArrowForwardIcon className="arrow-icon" />
            </Text>
            <Text>{tokenName}</Text>
          </div>
        </StyledCardHeader>
        <StyledCardContent>
          <Text className="value" color="secondary">${value}</Text>
          <Text>{percentage} today</Text>
        </StyledCardContent>
      </CardBody>
    </StyledCard>
  )
}

export default CardTradingNow;
