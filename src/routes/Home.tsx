import styled from "styled-components";
import {
  LiquidGlassButton,
  LiquidGlassContainer,
  LiquidGlassLink,
} from "@tinymomentum/liquid-glass-react";
import "@tinymomentum/liquid-glass-react/dist/components/LiquidGlassBase.css";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// https://react-bootstrap.netlify.app/docs/components/dropdowns/

const NavBar = styled(LiquidGlassContainer)`
  width: 70% !important;
  height: 35px !important;
  position: fixed !important;
  top: 10px;
  margin: 20px auto;
  z-index: 1;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(255, 255, 255, 0.21); /* transparent background */
  /* backdrop-filter: blur(5.5px); glass blur effect */
  /* -webkit-backdrop-filter: blur(5.5px); Safari support */
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */

  /* box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2); */
  /* https://www.liquid-glass.pro/doc/react.html */
`;

const NavBarUl = styled.ul`
  display: flex;
  height: 100%;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const Navli = styled.li`
  color: white;
  height: 80% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px !important;
`;
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 100%;
  border-radius: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: white;
  }
`;
const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavDropdownBox = styled.div`
  border-radius: 20px;
  width: 134px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
`;
const NavDropdownOption = styled(Link)`
  color: white;
`;

function Home() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <NavBarWrapper>
        <NavBar
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
          <NavBarUl>
            <Navli>
              <NavLink to="/">Home</NavLink>
            </Navli>
            <Navli>ProjectUX</Navli>
            <Navli>News</Navli>
            <Navli>About</Navli>
          </NavBarUl>
        </NavBar>
        <Footer />
      </NavBarWrapper>
      <Outlet />
    </>
  );
}

export default Home;
