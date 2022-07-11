import styled from "styled-components";

export const Greeting = styled.div`
  background: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 1rem;
  h2 {
    font-size: 0.75rem;
  }

  span {
    text-transform: capitalize;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    background: transparent;
    padding: 0;
    left: 5%;
    margin: 0;
    top: 12%;
    width: 90%;
    z-index: 1;
    h2 {
      font-size: 1rem;
    }
  }
`;
