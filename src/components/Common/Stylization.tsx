import React from 'react'
import styled from 'styled-components';
import { LiquidGlassButton } from "@tinymomentum/liquid-glass-react";
import "@tinymomentum/liquid-glass-react/dist/components/LiquidGlassBase.css";
import { Link } from 'react-router-dom';

export const ApplyBtn = styled(LiquidGlassButton)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.3);

  font-size: 12px;
  color: white;
  border-radius: 50px !important; /* Force pill shape */
  
  min-height: 80%;
  padding: 5px 20px;
  box-sizing: border-box;

  &:active {
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4),
      inset -2px -2px 6px rgba(255, 255, 255, 0.3);
    transform: translateY(1px); /* optional for a “pressed” feel */
  }
`;


