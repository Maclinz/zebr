import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0 ;
        padding:0 ;
        box-sizing: border-box ;
    }
    :root{
        --color-white: #fff;
    }

    body{
        height: 100vh ;
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        color: var(--color-white);
        @media screen and (max-width: 673px){
            font-size: 14px;
        }
    }

    .App{
        padding:20px 242px;
        height: 100vh ;
        background: linear-gradient(109.37deg, #434343 3.21%, #212121 95.6%);
        @media screen and (max-width: 1620px){
            padding:25px 200px;
        }
        @media screen and (max-width: 1370px){
            padding:25px 150px;
        }
        /*@media screen and (max-width: 1266px){
            padding:25px 100px;
        }*/
        @media screen and (max-width: 973px){
            padding:15px 50px;
        }
        @media screen and (max-width: 451px){
            padding:10px 20px;
            .bpqefj .stats-big-text .old-views {
                font-size: 16px;
            }
            .bpqefj .stats-big-text .more-views h3{
                font-size: 1.2rem;
            }
        }
    }

`;

export default GlobalStyle;