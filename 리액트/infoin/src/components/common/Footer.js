import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footerBox">
        <div className="hrDiv"></div>
        <div className="footer">
          <ul className="resetList Footer__ul">
            <li>
              <span className="footer__contactUs">CONTACT US</span>
              <ul className="resetList footerUl">
                <li>+02-559-1601</li>
                <li>szipz@hanmail.net</li>
                <li>look for a company</li>
              </ul>
            </li>
            <li>
              <span className="footer__work">WORK</span>
              <ul className="resetList footerUl">
                <li>System Integration</li>
                <li>InfoPlatform</li>
                <li>3D.R</li>
                <li>데이터 수집 AI</li>
                <li>드론 촬영</li>
              </ul>
            </li>
            <li>
              <span className="footer__solution">SOLUTION</span>
              <ul className="resetList footerUl">
                <li>쇼핑몰</li>
                <li lang="en">IOT</li>
                <li lang="en">3D</li>
              </ul>
            </li>
            <li>
              <span className="footer__portfolio">PORTFOLIO</span>
              <ul className="resetList footerUl">
                <li>웹</li>
                <li>모바일</li>
                <li>IOT</li>
                <li>애니메이션</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__nav">
        <div className="footer__navBox">
          <ul className="resetList">
            <li>
              <Link to="/" lang="en">
                ABOUS US
              </Link>
            </li>
            <li>
              <Link to="/" lang="en">
                WORK
              </Link>
            </li>
            <li>
              <Link to="/" lang="en">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/" lang="en">
                Q&A
              </Link>
            </li>
            <li>
              <Link to="/" lang="en">
                CONTACT
              </Link>
            </li>
            <li className="footer__navBox-security">
              <Link to="/" lang="en">
                개인정보처리방침
              </Link>
            </li>
          </ul>
          <span className="footer__navBoxcopyright" lang="en">
            Copyright &copy; INFOIN CO.,Ltd. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
