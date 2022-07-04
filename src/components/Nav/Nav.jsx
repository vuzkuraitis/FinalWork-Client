import React, { useState } from "react";
import * as S from "./Nav.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoHH.webp";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);

  const publicLinks = [
    {
      url: "/register",
      title: "Register",
    },
    {
      url: "/",
      title: "Login",
    },
  ];

  const privateLinks = [
    {
      url: "/home",
      title: "Home",
    },
    {
      url: "/prices",
      title: "Prices",
    },
    {
      url: "/addexc",
      title: "Add Exercise",
    },
    {
      url: "/",
      title: "Add Workout",
    },
  ];

  const navigate = useNavigate();
  const links = localStorage.getItem("token") ? privateLinks : publicLinks;
  return (
    <S.Nav className="navbar">
      <div className="navbarWrapper">
        <S.NavBrand>
          <img src={Logo} alt="Hamburg Athletics" />
        </S.NavBrand>

        <S.MenuIcon active={active} onClick={() => setActive(!active)}>
          <div />
          <div />
          <div />
        </S.MenuIcon>
        {links && (
          <S.BurgerMenu active={active}>
            {links.map((link) => (
              <Link to={link.url} key={link.title} className="navbar-item">
                {link.title}
              </Link>
            ))}
            {localStorage.getItem("token") && (
              <Button
                handleClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </Button>
            )}
          </S.BurgerMenu>
        )}
      </div>
    </S.Nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      active: PropTypes.func,
    })
  ),
};

export default Nav;
