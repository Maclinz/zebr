import React from 'react'
import styled from 'styled-components';
import CountUp from 'react-countup';

function Bar({ fg, bg, stats, height, delay }) {
    return (
        <BarStyled height={height}>
            <div className="progress-bar" style={{background:fg}}>
                <div className="progress" style={{background: bg, animationDelay:delay}}>
                    <span className="progress-text">
                        <CountUp start={0} end={stats} separator=","  decimal="," duration={6} delay={1.5} />
                    </span>
                </div>
                <div className="progress-circle" style={{background:bg}}></div>
            </div>
        </BarStyled>
    )
}

const BarStyled = styled.div`
    height:100% ;
    .progress-bar{
        height: 100%;
        width:81px ;
        border-radius: 50px 50px 0px 0px;
        position: relative;
        @media screen and (max-width: 799px){
            margin-bottom: 2rem;
            width: 61px;
        }
        @media screen and (max-width: 451px){
            
        }
        .progress{
            width:100%;
            position: absolute;
            bottom:0;
            height: ${props => props.height};
            border-radius: 50px 50px 0px 0px;
            animation:scaleY .5s cubic-bezier(.68,.12,.23,1.35);
            animation-fill-mode: forwards;
            transform-origin: bottom; 
            transform: scaleY(0); 
            transition: all .3s ease-in-out;
            .progress-text{
                position: absolute;
                left:50%;
                transform: translateX(-50%) ;
                top: 30%;
                font-weight:500;
                transition: all .3s ease-in-out;
                @media screen and (max-width: 799px){
                    font-size: 13px;
                }
            }
        }
        .progress-circle{
            position: absolute;
            width:1.1rem;
            height:1.1rem;
            border-radius: 50%;
            left:50%;
            transform: translateX(-50%) ;
            bottom: -42px;
            z-index: 5;
        }
    }

    @keyframes scaleY {
        0% {
            transform: scaleY(0); 
        }
        100% {
            transform: scaleY(1); 
        }
    }
`;

export default Bar;