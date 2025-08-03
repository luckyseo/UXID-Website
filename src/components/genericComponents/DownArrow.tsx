import styled from "styled-components";

const ArrowWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1); /* semi-transparent circle */
  border: 1px solid rgba(255, 255, 255, 0.2); /* soft border */

  margin-top: 40px;
  cursor: pointer;

  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(3px); /* subtle hover press */
  }
  &:active {
    transform: translateY(6px); /* more press effect when clicked */
  }
`;

export default ArrowWrapper;
