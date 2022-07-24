import styled from "styled-components";

export const EventList = styled.div`
  border-collapse: collapse;
  color: #ffffff;
  font-size: 0.75rem;
  width: 100%;

  ul {
    padding: 0 1rem;
  }
  .eventListItem {
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
    background: transparent;
    transition: ease 0.3s;
  }
  li:hover {
    transform: scale(1.02);
    background: #87878e;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    margin: 0 auto;
    width: 90%;
  }
`;
