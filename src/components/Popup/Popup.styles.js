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
    width: 80%;
    background-color: #ffffff;
    margin: 5rem auto;
    overflow: scroll;
  }

  .close-btn {
    cursor: pointer;
    border-radius: 50%;
    position: fixed;
    right: 8%;
    top: 4rem;
  }

  img {
    display: block;
    width: 100%;
  }

  .popup-info > .field > label {
    color: #ffffff;
  }
  @media screen and (min-width: 530px) {
    .inner-popup {
      width: 60%;
    }
    .close-btn {
      right: 18%;
    }
  }
  @media screen and (min-width: 768px) {
    .inner-popup {
      width: 45%;
    }
    .close-btn {
      right: 26%;
    }
  }
  @media screen and (min-width: 1024px) {
    .close-btn {
      top: 9rem;
      right: 4%;
    }
    .inner-popup {
      width: 90%;
      margin: 10rem auto;
    }
    .popup-info {
      display: flex;
      height: auto;
    }
    img {
      width: 50%;
    }
  }
  @media screen and (min-width: 1201px) {
    .close-btn {
      top: 7rem;
      right: 15%;
    }
    .inner-popup {
      width: 70%;
      margin: 8rem auto;
    }
  }
`;
