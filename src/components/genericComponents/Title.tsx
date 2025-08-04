import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ThinTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.2;
`;

export const AccentPosition = styled(ThinTitle)`
  color: ${(props) => props.color || "var(--white)"};
  display: inline;
`;
