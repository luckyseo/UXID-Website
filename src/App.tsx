import React from "react";
import Router from "./Router";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./styles/index.css";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: url('/img/bg.png') repeat-y center top;
   //for testing liquid effect
  background-size: cover;
  height: 2000px;
  color: white;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0
  }
  a{
    text-decoration: none;
    color:inherit;
  }
body{
  font-family: 'Nunito', sans-serif;

}
`;
const BlurredBackground = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  background-size: cover;
  filter: blur(12px); /* ✅ Blurs the background */
  transform: scale(1.05); /* ✅ avoids sharp edges showing at sides */
  z-index: -2; /* ✅ stays at the very back */
`;
function App() {
  return (
    <>
      {/* <BlurredBackground /> */}
      <GlobalStyle />
      <Router />
      {/* <RouterProvider router={Router} /> */}
    </>
  );
}

export default App;
