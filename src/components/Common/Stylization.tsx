import styled from "styled-components";

//Basic components e.g title, button, arrow-> genericComponents
//Repeated Combination -> Stylization

export const SectionWrapper = styled.div`
  //This Wraps Title Container & Cards
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleContainer = styled.div`
  //This is mainly for wrapping Title & Description component
  display: inline-block;
  align-items: center;
  width: 60%;
`;

export const CardGrid = styled.div`
  display: grid;
  max-width: 850px;
  min-height: 440px;
  border-radius: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 20px;
`;
