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
:root{
 --white:rgb(255, 255, 255);
 --yellow:rgb(252, 208, 10);
 --green:rgb(76, 186, 100);
 --pink:rgb(242, 119, 174);
 --orange:rgb(247, 152, 27);
 --black:rgb(31, 35, 41);
 --darkpurple: rgb(38, 34, 97);
 --ivory:rgb(250, 243, 177);
 --text-color:var(--white); //default text color
 --borderRadius: 20px; //for card & rectangle box
 --bg-color: var(--darkpurple); //default background color
 --font-weight-bold: 700;
 --font-weight-slim:400;
--font-size-xs:13px; //footer fontsize
--font-size-s: 1rem; //cardG (benefit section) fontsize
--font-size-m:1.2rem; //description fontsize
--font-size-l:20px; //Apply Now(student page btn) size
--font-size-xl:2.5rem;//title fontsiz
--font-size-2x: 8rem; //ProjectUX banner logo size
--line-height-description: 1.15;
--line-height-title: 1.2;
}
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
  /* background: url('/img/bg.png') repeat-y center top; */
  background-color: rgb(43, 39, 102);
   //for testing liquid effect
  background-size: cover;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <RouterProvider router={Router} /> */}
    </>
  );
}

export default App;
