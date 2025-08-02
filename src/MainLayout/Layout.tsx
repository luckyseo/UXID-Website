import styled from "styled-components";
import {
  LiquidGlassButton,
  LiquidGlassContainer,
  LiquidGlassLink,
} from "@tinymomentum/liquid-glass-react";
import "@tinymomentum/liquid-glass-react/dist/components/LiquidGlassBase.css";
import { useState } from "react";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import NavBarTop from "./NavBarTop";


function Layout() {

  const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

  return (
    <>

         <NavBarTop></NavBarTop>
        <Outlet />
        <Footer />
 
     
    
      
    </>
  );
}

export default Layout;
