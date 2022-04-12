import React from 'react'
import styled from 'styled-components';
import { RevealAnimation } from './Animations';
import CountUp from 'react-countup';




const eye = <i className="fa-solid fa-eye"></i>

function Stats() {
    return (
        <StatsStyled>
            <div className="stats-big-text">
                <p className='old-views anim-para'>Views In 2022</p>
                <h1>
                    <span className='v-views'>
                        {eye}
                    </span>
                    <CountUp start={0} end={1315742} separator=","  decimal="," duration={2} delay={1} />
                </h1>
                <div className="more-views">
                    <h3>
                        <span><i class="fa-solid fa-plus"></i></span>
                        <span className='counter-num'>
                            <CountUp start={0} end={200.61} separator=" " decimals={2} decimal="," duration={2} delay={1.5} />%
                        </span>
                        
                    </h3>
                </div>
                <p className='new-views'>
                    <i class="fa-solid fa-circle-arrow-up"></i>
                    New Views
                </p>
                
            </div>
            <p className='anim-para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            </p>
        </StatsStyled>
    )
}

const StatsStyled = styled(RevealAnimation)`
    position: absolute;
    bottom:0;
    left: 0;
    opacity:0 ;
    animation: reveal2 1s cubic-bezier(.84,0,.03,1.33);
    animation-fill-mode: forwards;
    .stats-big-text{
        @media screen and (max-width: 673px){
            margin-bottom:.5rem;
        }
        .old-views{
            font-weight: 500;
            font-size:25px;
            margin-bottom: .2rem;
            @media screen and (max-width: 673px){
                font-size: 20px;
            }
        }

        .new-views{
            font-weight: 500;
            font-size: 17px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            opacity: 0.8 !important;
            margin-bottom:1.3rem ;
            i{
                margin-right: .5rem;
                font-size:17px ;
                color: #27AE60;
            }
        }
        h1{
            font-size: 4rem;
            font-weight:800 ;
            letter-spacing: 4px ;
            display: flex;
            justify-content: space-between;
            span{
                //margin-right:1rem ;
                opacity: .8;
            }
            @media screen and (max-width: 673px){
                font-size: 3rem;
            }
            @media screen and (max-width: 451px){
                font-size: 2rem;
            }
        }
        .more-views{
            display: flex;
            justify-content: flex-end;
            .counter-num{
                span{
                    margin: 0;
                }
            }
            h3{
                align-self: flex-end;
                font-size:2rem;
                display: flex; 
                color: #27AE60;
                letter-spacing: 2px ;
                span{
                    font-size:1.6rem;
                    //margin-right: 1rem;
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                    @media screen and (max-width: 673px){
                        font-size: 1.3rem;
                    }
                }
                @media screen and (max-width: 673px){
                    font-size: 1.5rem;
                    
                    margin-top: .5rem;
                }
            }
        }
    }
    .anim-para{
        animation: simpleReveal 1s ease-in-out;
        animation-delay: .8s;
        animation-fill-mode:forwards;
        opacity: 0;
    }
`;

export default Stats;