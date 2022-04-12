import styled from 'styled-components';
import Barchart from './Components/Barchart';
import Stats from './Components/Stats';
import logo from './img/logo.png';
import {RevealAnimation} from './Components/Animations';

function App() {
  return (
    <AppStyled className="App">

      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1 className='c-month'>Month 2</h1>
      <div className="main-content-con">
        <div className="left-content">
          <Stats />
        </div>
        <div className="right-content">
          <Barchart />
          <div className="bar-bottom">
            <div className="line"></div>
          </div>
          <div className="bottom-text">
            <div className="month">
              <p>Month 1</p>
            </div>
            <div className="month">
              <p>Month 2</p>
            </div>
            <div className="month">
              <p>Month 3</p>
            </div>
            <div className="month">
              <p>Month 4</p>
            </div>
            <div className="month">
              <p>Month 5</p>
            </div>
          </div>
        </div>
        
      </div>
    </AppStyled>
  );
}

const AppStyled = styled(RevealAnimation)`
  position: relative;
  overflow: hidden;
  .logo{
    animation: simpleReveal 1s ease-in-out;
    animation-delay:1.2s ;
    animation-fill-mode:forwards;
    opacity: 0;
    @media screen and (max-width: 451px){
      img{
        width: 160px;
      }
    }
  }
  .c-month{
    text-align:center;
    font-size: 3rem; 
    font-weight: 800;
    letter-spacing: 3px;
    animation: simpleReveal2 .5s ease-in;
    animation-delay: .5s ;
    animation-fill-mode:forwards;
    opacity: 0;
    margin-top:1rem ;
    @media screen and (max-width: 451px){
      font-size: 2rem; 
    }
    @media screen and (max-width: 451px){
      margin-bottom:4rem 
    }
  }

  .main-content-con{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    height:68% ;
    margin-top: 3rem;
    @media screen and (max-width: 1165px){
      grid-template-columns:repeat(1, 1fr);
    }
    .left-content{
      position: relative;
      width: 75%;
      @media screen and (max-width: 1165px){
        margin-bottom: 2rem;
        width: 100%;
      }
    }
  }

  .bar-bottom{
    position: relative;
    height: 1rem;
    .line{
      width: 88%;
      height: 4px;
      border: none;
      background-image: linear-gradient(270deg, #27AE60 -5.53%, #F2994A 50.96%, #EB5757 104.02%);
      margin-top:2rem ;
      display: inline-block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
    }
  }

  .bottom-text{
    display:flex;
    justify-content:space-between;
    margin: 2.5rem .8rem;
    .month{
      p{
        text-align:center ;
      }
    }
  }

  .bar-bottom , .bottom-text{
    position: relative;
    animation: reveal 1s ease-in-out;
    animation-delay: .7s ;
    animation-fill-mode:forwards ;
    opacity:0 ;
    @keyframes reveal {
        0% {
            opacity: 0;
            transform: translateY(100%) ;
        }
        100% {
            opacity: 1;
            transform: translateY(0) ; 
        }
    }
  }
`;

export default App;
