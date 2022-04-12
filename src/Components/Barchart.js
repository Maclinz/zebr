import React from 'react'
import styled from 'styled-components';
import Bar from './Bar';

function Barchart() {
    return (
        <BarchartStyled >
            <div className="views">
                <p>Views</p>
            </div>
            <div className="bar-con">
                <Bar fg={'#363A3E'} bg={'#EB5757'} stats={205398} height={'19%'}  delay={'1s'} />
            </div>
            <div className="bar-con">
                <Bar fg={'#363A3E'} bg={'#F56692'} stats={615742} height={'33%'}  delay={'1.5s'}/>
            </div>
            <div className="bar-con">
                <Bar fg={'#363A3E'} bg={'#F2994A'} stats={1371277} height={'50%'}  delay={'1.7s'}/>
            </div>
            <div className="bar-con">
                <Bar fg={'#363A3E'} bg={'#6BBE92'} stats={6207978} height={'70%'} delay={'2s'}/>
            </div>
            <div className="bar-con">
                <Bar fg={'#363A3E'} bg={'#27AE60'} stats={11561134} height={'91%'} delay={'2.2s'}/>
            </div>
        </BarchartStyled >
    )
}

const BarchartStyled = styled.div`
    height:100% ;
    display:flex;
    justify-content:space-between;
    position: relative;
    animation: reveal 1s ease-in-out;
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
    
    .views{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -54px;
        transform:rotate(-90deg);
        p{
            font-weight:500;
        }
        @media screen and (max-width: 451px){
            display:none;
        }
    }
    .bar-con{
        height:100% ;
        @media screen and (max-width: 647px){
            margin:0 .4rem;
        }
        @media screen and (max-width: 451px){
            margin:0 .2rem;
        }
    }
`;

export default Barchart;