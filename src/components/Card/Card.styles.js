import styled from "styled-components";

export const Card = styled.div`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
  text-align: center;
`;

export const Image = styled.img`
  border-bottom: 0.125rem solid #bbbbbb;
  display: block;
  height: auto;
  max-width: 100%;
  opacity: 1;
  width: 100%;

  &:hover {
    opacity: 0.5;
    transition: 0.3s ease;
  }
`;
