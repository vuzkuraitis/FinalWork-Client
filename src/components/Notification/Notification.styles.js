import styled from "styled-components";

export const Notification = styled.div`
  background: #eeeeee;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 1rem;

  button {
    border-radius: 50%;
    background: #d0c9c0;
    border: none;
    color: #ffffff;
    font-size: 0.65rem;
    position: relative;
    top: -0.5rem;
  }
`;
