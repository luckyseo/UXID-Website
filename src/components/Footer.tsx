import {
  LiquidGlassContainer,
  LiquidGlassButton,
} from "@tinymomentum/liquid-glass-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ApplyBtn } from "../components/genericComponents/Buttons";

const Container = styled(LiquidGlassContainer)`
  width: 70% !important;
  height: 35px !important;
  position: fixed !important;
  bottom: 15px;
  margin: 20px auto;
  z-index: 1;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 13px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & span {
    white-space: nowrap;
  }
`;
const SocialLink = styled.a`
  z-index: 10;
`;
function Footer() {
  return (
    <Container
      width={950}
      height={50}
      borderRadius={50}
      innerShadowColor="#cfcfcf"
      innerShadowBlur={15}
      innerShadowSpread={-10}
      glassTintColor="rgba(255, 255, 255, 0)"
      glassTintOpacity={0}
      frostBlurRadius={0}
      noiseFrequency={0.008}
      noiseStrength={77}
    >
      <Wrapper>
        <span>What are you waiting for?</span>
        <ApplyBtn
          width={100}
          height={25}
          borderRadius={50}
          innerShadowColor="#f5f0f0"
          innerShadowBlur={0}
          innerShadowSpread={-5}
          glassTintColor="rgba(249, 248, 248, 0.127)"
          glassTintOpacity={0}
          frostBlurRadius={6}
          noiseFrequency={0.008}
          noiseStrength={77}
        >
          Apply Now!
        </ApplyBtn>
      </Wrapper>
      <Wrapper>
        <SocialLink
          //bc of the liquid-glass transparent layer (prob bc of pseudo-elements ::before/::after ), z-index was necessary
          href="https://www.instagram.com/uts.uxid.society/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size={"2x"} />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/company/uts-uxid-society"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
        </SocialLink>
      </Wrapper>
    </Container>
  );
}

export default Footer;
