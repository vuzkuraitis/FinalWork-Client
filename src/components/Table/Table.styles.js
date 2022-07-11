import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.75rem;
  padding: 0 1rem 3rem 1rem;
  text-align: center;
  width: 100%;
  tr {
    font-weight: bolder;
  }
  th {
    background: #787a91;
    color: #ffffff;
  }
  tr > th,
  td {
    border: 1px solid #787a91;
    color: #ffffff;
    padding: 1rem 0;
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
  .deleteIcon:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 481px) {
    font-size: 1rem;
  }
`;
