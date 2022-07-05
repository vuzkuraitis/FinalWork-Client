import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardItem = styled(Card)`
  box-sizing: border-box;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    width: calc(33.33% - 1.35rem);

    :nth-child(3) {
      margin-right: 0;
    }
  }
`;
