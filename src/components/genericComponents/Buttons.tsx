import styled from "styled-components";
import { LiquidGlassButton } from "@tinymomentum/liquid-glass-react";
import "@tinymomentum/liquid-glass-react/dist/components/LiquidGlassBase.css";

export const ApplyBtn = styled(LiquidGlassButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);

  font-size: 12px;
  color: white;
  border-radius: 50px !important; /* Force pill shape */

  min-height: 80%;
  padding: 5px 15px;
  box-sizing: border-box;

  &:active {
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4),
      inset -2px -2px 6px rgba(255, 255, 255, 0.3);
    transform: translateY(1px); /* optional for a “pressed” feel */
  }
`;

export const MApplyBtn = styled(LiquidGlassButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);

  font-size: 20px;
  color: white;
  border-radius: 50px !important; /* Force pill shape */

  min-height: 80%;
  padding: 5px 15px;
  box-sizing: border-box;

  background: rgba(255, 255, 255, 0.1); /* semi-transparent circle */
  border: 1px solid rgba(255, 255, 255, 0.2); /* soft border */
  &:active {
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.4),
      inset -2px -2px 6px rgba(255, 255, 255, 0.3);
    transform: translateY(1px); /* optional for a “pressed” feel */
  }
`;
