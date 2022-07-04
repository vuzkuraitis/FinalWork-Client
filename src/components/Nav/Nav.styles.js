import styled from "styled-components";

export const Nav = styled.div`
  background: #000000;
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  flex-direction: row;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  img {
    height: 3rem;
  }
  .navbarWrapper {
    width: 90%;
    justify-content: space-between;
    display: flex;
  }
`;

export const NavBrand = styled.div`
  font-size: 2rem;
`;

export const BurgerMenu = styled.div`
  display: flex;
  align-items: center;

  .navbar-item {
    color: #ffffff;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem;
  }
  .navbar-item:hover {
    color: #646fd4;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background: #000000;
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(100%)"};
    position: absolute;
    top: 6.4rem;
    left: 0;
    width: 100%;

    button {
      margin: 2rem;
      margin-top: 1rem;
    }

    .navbar-item {
      margin: 0.75rem;
    }
    .navbar-item:nth-last-child(1) {
      margin-right: 1rem;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ active }) => (active ? "#cccccc" : "#ffffff")};
    border-radius: 5rem;
    transform-origin: 1px;
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ active }) => (active ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      opacity: ${({ active }) => (active ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ active }) =>
        active ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
