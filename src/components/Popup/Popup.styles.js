import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;

  .inner-popup {
    position: relative;
    width: 70%;
    background-color: #ffffff;
    margin: 10rem auto;
    overflow: auto;
  }

  .close-btn {
    cursor: pointer;
    border-radius: 50%;
    position: fixed;
    right: 14%;
    top: 9rem;
  }

  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .inner-popup {
      height: 60vh;
    }
  }
`;
