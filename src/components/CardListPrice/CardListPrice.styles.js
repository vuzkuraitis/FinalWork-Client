import styled from "styled-components";
import CardPrice from "../CardPrice/CardPrice";

export const CardListPrice = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
    transition: transform 0.3s;
    :nth-child(3) {
      margin-right: 0;
    }
    :hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 15px 6px rgba(255, 255, 255, 0.75);
    }
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
