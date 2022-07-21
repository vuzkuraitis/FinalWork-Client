import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  .cardlist-inside {
    background: #333444;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 2rem;
    margin-bottom: 2rem;

    h4 {
      font-size: 1rem;
      padding-bottom: 1rem;
    }
  }
  .delete {
    color: #ff8b8b;
    cursor: pointer;
    margin: 1rem auto;
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    .cardlist-inside {
      margin-right: 2rem;
      width: calc(33.33% - 1.35rem);

      :nth-child(3) {
        margin-right: 0;
      }
    }
  }
`;

export const CardItem = styled(Card)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;

  h4 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    height: 8vh;
    margin: 1rem 0;
    text-align: center;
    transition: ease 0.3s;
  }
  h4 > span {
    color: #ff8b8b;
    font-size: 2rem;
  }
  h4:hover {
    box-shadow: 12px 11px 9px -2px rgba(0, 0, 0, 0.75);
    transform: scale(1.2);
  }
`;
