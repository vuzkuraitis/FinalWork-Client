import styled from "styled-components";

export const List = styled.div`
  border-collapse: collapse;
  color: #ffffff;
  font-size: 0.75rem;
  width: 100%;

  ul {
    padding: 0 1rem;
  }
  .listItem {
    border-bottom: 1px solid #787a91;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0.5rem 0;
  }

  li:nth-last-child(1) {
    border-bottom: none;
  }
  .delete {
    background: transparent;
    border: none;
  }
  .deleteIcon {
    background: #787a91;
    color: #ffffff;
    padding: 0.5rem;
  }

  @media screen and (min-width: 481px) {
    font-size: 1rem;
  }
`;
