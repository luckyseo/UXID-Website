import styled, { keyframes } from "styled-components";

// 🌈 Optional animated gradient for hover
import DownArrow from "../genericComponents/DownArrow";
import { useState } from "react";

const LogoBox = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div<{ x: number; y: number }>`
  display: inline-block;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 20px;
  padding: 0.1em 0;
  line-height: 1.2;
  /* 🎯 Gradient spotlight follows the mouse */
  background: radial-gradient(
    circle at ${(props) => props.x}% ${(props) => props.y}%,
    #ecec47 0%,
    rgba(255, 200, 150, 0.8) 10%,
    rgba(255, 105, 180, 0.783) 25%,
    rgba(255, 105, 180, 0.2) 35%,
    rgba(0, 0, 0, 0) 50%
  );

  /* background-size: 150% 150%; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* subtle inset shadow for “carved” look */
  text-shadow: 1px 1px 1px rgba(84, 82, 82, 0.1),
    -1px -1px 1px rgba(255, 255, 255, 0.5);

  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
`;
const Subtitle = styled(LogoText)`
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.8;
  color: #cfcde3;
  letter-spacing: 0px;
`;

export default function Home() {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <LogoBox onMouseMove={handleMouseMove}>
      <LogoText x={coords.x} y={coords.y}>
        <h1>ProjectUX</h1>
      </LogoText>
      <Subtitle x={coords.x} y={coords.y}>
        established by the UTS UXID Society
      </Subtitle>

      <DownArrow />
    </LogoBox>
  );
}
