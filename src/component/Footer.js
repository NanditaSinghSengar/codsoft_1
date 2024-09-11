import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const FooterLink = styled.li`
  margin-right: 20px;
`;

const FooterLinkAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const FooterCopyright = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink>
          <FooterLinkAnchor href="#">About Us</FooterLinkAnchor>
        </FooterLink>
        <FooterLink>
          <FooterLinkAnchor href="#">Contact Us</FooterLinkAnchor>
        </FooterLink>
        <FooterLink>
          <FooterLinkAnchor href="#">FAQs</FooterLinkAnchor>
        </FooterLink>
        <FooterLink>
          <FooterLinkAnchor href="#">Terms & Conditions</FooterLinkAnchor>
        </FooterLink>
        <FooterLink>
          <FooterLinkAnchor href="#">Privacy Policy</FooterLinkAnchor>
        </FooterLink>
      </FooterLinks>
      <FooterCopyright>
        &copy; 2023 Shoppy. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;