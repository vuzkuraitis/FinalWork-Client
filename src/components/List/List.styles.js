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
    align-items: center;
    border-bottom: 1px solid #787a91;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0.5rem;
  }

  li:nth-last-child(1) {
    border-bottom: none;
  }
  li {
    background: #333444;
    transition: ease 0.3s;
  }
  li:hover {
    transform: scale(1.02);
    background: #87878e;
  }
  .delete {
    color: #ff8b8b;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
