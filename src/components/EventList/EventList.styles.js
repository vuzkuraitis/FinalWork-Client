import styled from "styled-components";

export const EventList = styled.div`
  border-collapse: collapse;
  color: #ffffff;
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
  .innerDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li:nth-last-child(1) {
    border-bottom: none;
  }
  li {
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    transition: ease 0.3s;
  }
  li > div {
    text-align: center;
  }
  li:hover {
    transform: scale(1.02);
    background: #333444;
  }
  span {
    margin-right: 0.5rem;
    color: #ff8b8b;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
    .innerDiv {
      flex-direction: row;
      margin-bottom: 1rem;
      width: 100%;
    }
    .eventListItem > button {
      margin: 0 auto;
    }
  }
`;
