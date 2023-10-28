import React from "react";
import "./footer.css";
import footer_img from "../../images/logo_big.png";
import whatapp from '../../images/whatsapp_icon.png';
import insta from '../../images/instagram_icon.png'
import pinterest from '../../images/pintester_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={footer_img} alt="" />
        <h1>Shopper</h1>
      </div>
      <div className="footer_link">
        <ul className="link_list">
          <li>Company</li>
          <li>Product</li>
          <li>office</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="footer_icons">
        <ul>
          <li>
            <img src={whatapp} alt="" />
          </li>
          <li>
          <img src={insta} alt="" />
          </li>
          <li>
            <img src={pinterest} alt="" />
          </li> 
        </ul>
      </div>
      <hr />
      <div>
        <p>design by bahadur mia shihab</p>
      </div>
    </div>
  );
};

export default Footer;
