import {
  LiquidGlassContainer,
  LiquidGlassButton,
} from "@tinymomentum/liquid-glass-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  gap: 5px;
  & span {
    white-space: nowrap;
  }
`;
const ApplyBtn = styled(LiquidGlassButton)`
  display: flex;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;

  &:active {
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4),
      inset -2px -2px 6px rgba(255, 255, 255, 0.3);
    transform: translateY(1px); /* optional for a “pressed” feel */
  }
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
          width={75}
          height={23}
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
        <a>
          <FontAwesomeIcon icon={faInstagram} size={"2x"} />
        </a>
        <a>
          <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
        </a>
      </Wrapper>
    </Container>
  );
}

export default Footer;
