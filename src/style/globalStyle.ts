import { createGlobalStyle } from 'styled-components'

export default () => createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin-left: calc(100vw - 100%); 
  color: ${props => props.theme.colors.gray[6]};
  body ::-webkit-scrollbar {
    width: 7px;
  }
  body ::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
    border-radius: 5px;
  }
  body ::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
    transition: color .2s ease;
  }
  li {
    list-style: none;
  }
}
`
