import React from "react"
import {FaInstagram,FaLinkedin,FaTwitter,} from "react-icons/fa"
import {FooterContainer,PaddedEmail,SocialIcon,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights,} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Woodstock 99
          </SocialLogo>
          <WebsiteRights>Woodstock 99 © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://www.instagram.com/katiejrise1995/?hl=en" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/katiejrise1995" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/katiejrise1995" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="mailto:katiejrise1995@gmail.com" target="_blank" aria-label="Email">
              <PaddedEmail/>
            </SocialIconLink>  
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
