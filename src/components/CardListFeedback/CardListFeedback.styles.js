import styled from "styled-components";
import CardFeedback from "../CardFeedback/CardFeedback";

export const CardListFeedback = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const CardFeedbackItem = styled(CardFeedback)`
  box-sizing: border-box;
  color: #ffffff;
  margin-bottom: 3rem;
  width: 100%;

  h2 {
    margin: 1rem auto;
    width: 90%;
  }
  p{
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 45%;

    @media screen and (min-width: 1024px) {
    width: 23%;
  }
`;
