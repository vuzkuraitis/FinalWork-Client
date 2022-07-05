import styled from "styled-components";

export const Greeting = styled.div`
  align-items: flex-end;
  background: #787a91;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  h2 {
    font-size: 0.75rem;
  }

  span {
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    background: transparent;
    color: #787a91;
    padding: 0;
    width: 90%;
    h2 {
      font-size: 1rem;
    }
  }
`;
