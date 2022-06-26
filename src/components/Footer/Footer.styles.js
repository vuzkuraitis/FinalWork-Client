import styled from "styled-components";

export const Footer = styled.div`
  background: #000000;
  color: #ffffff;
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  padding: 1rem 0;
  text-align: center;
  width: 100%;

  .socialMedia {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 50%;
  }

  .footer-item {
    color: #ffffff;
    font-size: 1.25rem;
    padding: 1rem;
  }

  .footer-item:hover {
    color: #646fd4;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    .footer-item {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`;
