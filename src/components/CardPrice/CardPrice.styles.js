import styled from "styled-components";

export const CardPrice = styled.div`
  background: #787a91;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  text-align: center;

  h2 {
    border-bottom: 1px solid #bbbbbb;
    margin: 0 auto;
    padding: 3rem 0 3rem 0;
    width: 50%;
  }
  p {
    border-bottom: 1px solid #bbbbbb;
    margin: 0 auto;
    padding: 3rem 0 3rem 0;
    width: 50%;
  }
  h3 {
    border-bottom: 1px solid #bbbbbb;
    margin: 0 auto;
    padding: 3rem 0 3rem 0;
    width: 50%;

    :last-child {
      border-bottom: none;
    }
  }
`;
