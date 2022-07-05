import styled from "styled-components";

export const HeroTransparent = styled.div`
  background: transparent;
  color: #787a91;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  h1 {
    font-size: 1rem;
  }
  .hero-body {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    background: #787a91;
    color: #ffffff;
  }
`;
