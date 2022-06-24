import styled from "styled-components";

export const Card = styled.div`
  border: 0.125rem solid #bbbbbb;
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
  text-align: center;
`;

export const Image = styled.img`
  border-bottom: 0.125rem solid #bbbbbb;
  max-width: 100%;
  display: block;
  opacity: 1;
  width: 100%;
  height: auto;

  &:hover {
    opacity: 0.5;
    transition: 0.3s ease;
  }
`;
