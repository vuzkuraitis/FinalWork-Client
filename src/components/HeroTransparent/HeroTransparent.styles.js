import styled from "styled-components";

export const HeroTransparent = styled.div`
  font-family: "Roboto", sans-serif;
  background: transparent;
  color: #787a91;
  padding: 1rem;
  h1 {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    background: #787a91;
    color: #ffffff;
  }
`;
