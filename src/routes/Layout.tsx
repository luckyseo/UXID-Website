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

import logo from "../assets/img/logo.png";
import { ApplyBtn } from "../components/Common/Stylization";

const NavBar = styled(LiquidGlassContainer)`
  width: 70% !important;
  height: 35px !important;
  position: fixed !important;
  top: 10px;
  margin: 20px auto;
  z-index: 1;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;

  &:focus {
    outline: none;
  }

  /* ::before styles */
  &::before {
    content: "";
    inset: 0;
    z-index: 0;
    border-radius: 25px;
    box-shadow: inset 0 0 15px -10px #faf9f9;
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  /* ::after styles */
  &::after {
    content: "";
    inset: 0;
    z-index: -1;
    border-radius: 25px;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    filter: url(#glass-distortion);
    -webkit-filter: url(#glass-distortion);
    pointer-events: none; //this makes decorative layers see-through and ables link function
  }
`;

const NavBarUl = styled.ul`
  display: flex;
  width: 70%;
  justify-content: center;
  gap: 50px;

  cursor: pointer;
`;

const Navli = styled.li`
  color: white;
  height: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(249, 248, 248, 0.127);
  }
`;
const NavDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }
`;
const NavDropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: calc(100% + 10px); //this adjusts the gap btw navmenu & dropdown dox
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 8px 0;

  list-style: none;
  flex-direction: column;
  min-width: 100px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;
const NavDropdownOption = styled(Link)`
  padding: 8px 12px;
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const Gap = styled.div`
  //this acts like a bridge btw navbar& dropdown dox.
  //Bc there should be no empty gap btw dropdown box and Navli to make hover work
  width: 100%;
  height: 20px;
  padding: 0px;
  position: absolute;
  top: 100%;
  z-index: 5;
`;
function Layout() {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <NavBar>
        <img
          src={logo}
          alt="UXID-Logo"
          style={{ height: 32, width: "auto", marginRight: 24 }}
        />
        <NavBarUl>
          <Navli>
            <NavLink to="/">Home</NavLink>
          </Navli>
          <Navli>
            <NavDropdownWrapper
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <NavLink to="/">ProjectUX</NavLink>
              <Gap />
              <NavDropdownMenu style={{ display: isHover ? "flex" : "none" }}>
                <NavDropdownOption to="/projectUX/student">
                  Student
                </NavDropdownOption>
                <NavDropdownOption to="/projectUX/client">
                  Client
                </NavDropdownOption>
                <NavDropdownOption to="/projectUX/mentor">
                  Mentor
                </NavDropdownOption>
              </NavDropdownMenu>
            </NavDropdownWrapper>
          </Navli>
          <Navli>
            <NavLink to="/News">News</NavLink>
          </Navli>
          <Navli>
            <NavLink to="/About">About</NavLink>
          </Navli>
        </NavBarUl>
        <ApplyBtn
          as={Link}
          to="/Contact"
          width={100}
          height={50}
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
          Contact Us
        </ApplyBtn>
      </NavBar>

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
