import styled from "styled-components";

export const Loading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;

  .circle {
    animation: animate 2s infinite linear;
    background: deepskyblue;
    border-radius: 50%;
    height: 1.25rem;
    margin: 0 0.25rem;
    width: 1.25rem;
    z-index: 1;
  }
  .circle:nth-child(1) {
    animation-delay: 0.5s;
  }
  .circle:nth-child(2) {
    animation-delay: 1s;
  }
  .circle:nth-child(3) {
    animation-delay: 1.5s;
  }

  @keyframes animate {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
