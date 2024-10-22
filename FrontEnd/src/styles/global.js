import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body{
        background-color:${({ theme }) => theme.COLORS.BG_MEDIUM};
        color:${({ theme }) => theme.COLORS.FONT_WHITE};
        -webkit-font-smoothing:antialiased
    }

    body,input,button,textarea{
        font-family:'Roboto Slab', serif;
        font-size:16px;
        outline:none
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition:filter 0.2s;
    }


    button:hover ,a:hover{
        filter:brightness(0.7);
    }
    ::-webkit-scrollbar {
    
        width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
    
    background-clip: content-box;
    border-left: 10px solid transparent;
    border-right:5px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
`;
