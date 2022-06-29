import React from "react";
import * as S from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <div className="socialMedia">
        <a
          href="https://www.facebook.com/hamburgathletics"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="footer-item" />
        </a>
        <a
          href="https://www.instagram.com/hamburg_athletics/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="footer-item" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCMe4VDDeGDOgKD00-PR0lIg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="footer-item" />
        </a>
      </div>
      <p>Copyright © {year} Hamburg Athletics</p>
    </S.Footer>
  );
};

export default Footer;
