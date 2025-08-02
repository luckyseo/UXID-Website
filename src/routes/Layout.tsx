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
import logo from "../assets/img/logo.png";

const NavBar = styled(LiquidGlassContainer)`
  width: 70% !important;
  height: 35px !important;
  position: fixed !important;
  top: 20px;
  margin: 20px auto;
  z-index: 1;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  align-items: center;


  width: 950px;
  height: 100px;
  border-radius: 25px;
  position: relative;
  isolation: isolate;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /* ::before styles */
  &::before {
    content: "";
    position: absolute;
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
    position: absolute;
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
  width: 80%;
  justify-content: space-around;

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
    background-color: rgba(249, 248, 248, 0.127);
  }
`;
const NavDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ul {
    display: flex; /* show dropdown on hover */
  }
`;
const NavDropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%; /* place under the parent */
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  flex-direction: column;
  min-width: 150px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;
const NavDropdownOption = styled(Link)`
  padding: 8px 12px;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

function Layout() {
  return (
    <>
      <NavBar
      // width={950}
      // height={50}
      // borderRadius={50}
      // innerShadowColor="#cfcfcf"
      // innerShadowBlur={15}
      // innerShadowSpread={-10}
      // glassTintColor="rgba(255, 255, 255, 0)"
      // glassTintOpacity={0}
      // frostBlurRadius={0}
      // noiseFrequency={0.008}
      // noiseStrength={77}
      >
        <img src={logo} alt="UXID-Logo" className="h-8 w-auto ml-auto"></img>
        <NavBarUl>
          <Navli>
            <NavLink to="/">Home</NavLink>
          </Navli>
          <Navli>
            <NavDropdownWrapper>
              <NavLink to="/">ProjectUX</NavLink>
              <NavDropdownMenu>
                <NavDropdownOption to="/projectUX/student">
                  Student
                </NavDropdownOption>
                <NavDropdownOption to="/projectUX/client">
                  client
                </NavDropdownOption>
                <NavDropdownOption to="/projectUX/mentor">
                  mentor
                </NavDropdownOption>
              </NavDropdownMenu>
            </NavDropdownWrapper>
          </Navli>
          <Navli>News</Navli>
          <Navli>About</Navli>
        </NavBarUl>
      </NavBar>

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
