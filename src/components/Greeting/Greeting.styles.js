import styled from "styled-components";

export const Greeting = styled.div`
  background: #787a91;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;

  h2 {
    font-size: 0.75rem;
  }

  span {
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    background: transparent;
    color: #787a91;
    width: 90%;
    padding: 0;
    h2 {
      font-size: 1rem;
    }
  }
`;
