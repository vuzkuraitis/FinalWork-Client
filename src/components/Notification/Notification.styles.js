import styled from "styled-components";

export const Notification = styled.div`
  display: flex;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  width: 100%;
  z-index: 9998;
`;
export const RemoveButton = styled.button`
  border-radius: 50%;
  background: #d0c9c0;
  border: none;
  color: #ffffff;
  font-size: 0.65rem;
  position: relative;
  top: -0.5rem;
`;
