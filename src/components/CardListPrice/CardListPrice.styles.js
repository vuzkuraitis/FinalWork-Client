import styled from "styled-components";
import CardPrice from "../CardPrice/CardPrice";

export const CardListPrice = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const CardItem = styled(CardPrice)`
  box-sizing: border-box;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 45%;

    :nth-child(3) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
