import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  
  -webkit-text-size-adjust: 100%;
  line-height: 1.7;
}

@media (min-width: 700px) {
  html {
    font-size: 62.5%;
  }
}

body {
  background: #f5f5f5;
  font-family: 'Space Mono', monospace;
  line-height: 1.7;
}
ul li {
  list-style: none;
}

a {
  text-decoration: none !important;
  cursor: pointer;
}

ul {
  list-style: none;
}

p {
  font-size: 1.6rem;
}

img {
  display: block;
  width: 100%;
  border-style: none;
}

textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  padding:0 !important;
  font-weight: bold;
}

input {
  background: transparent;
  border: none;
  outline: none;
  color: rgb(175, 177, 190);
  width:140%;
}

/* Full-width input fields */
input[type='text'],
input[type='password'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
}

input[type='text']:focus,
input[type='password']:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  box-shadow: none ;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 2.5rem;
}


.text-center {
  text-align: center;
  margin-top: 1.5rem;
}


.variable-height{

  min-height:100vh !important;

}

.slick-track{
  height:100vh;
  width:100vw;
}

  
.slick-slide img {
  
   object-fit:cover;
   width:100%;
   
  
}
`;

export default GlobalStyle;
