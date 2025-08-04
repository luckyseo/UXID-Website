import styled from "styled-components";

//Basic components e.g title, button, arrow-> genericComponents
//Repeated Combination -> Stylization

// :root{
//  --white:rgb(255, 255, 255);
//  --yellow:rgb(252, 208, 10);
//  --green:rgb(76, 186, 100);
//  --pink:rgb(242, 119, 174);
//  --orange:rgb(247, 152, 27);
//  --black:rgb(31, 35, 41);
//  --darkpurple: rgb(38, 34, 97);
//  --ivory:rgb(250, 243, 177);
//  --text-color:var(--white); //default text color
//  --borderRadius: 20px; //for card & rectangle box
//  --bg-color: var(--darkpurple); //default background color
//  --font-weight-bold: 700;
//  --font-weight-slim:400;
// --font-size-xs:13px; //footer fontsize
// --font-size-s: 1rem; //cardG (benefit section) fontsize
// --font-size-m:1.2rem; //description fontsize
// --font-size-l:20px; //Apply Now(student page btn) size
// --font-size-xl:2.5rem;//title fontsiz
// --font-size-2x: 8rem; //ProjectUX banner logo size
// --line-height-description: 1.15;
// --line-height-title: 1.2;
// }
// e.g: font-size: var(--font-size-xs);

export const SectionWrapper = styled.div`
  //This Wraps Title Container & Cards
  display: flex;
  gap: 50px;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
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
