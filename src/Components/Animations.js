import styled from "styled-components";

export const  RevealAnimation = styled.div`
    @keyframes reveal2 {
        0% {
            opacity: 0;
            transform: translateX(-100%) scale(0.6) ;
        }
        100% {
            opacity: 1;
            transform: translateX(0) scale(1);
        }
    }

    @keyframes simpleReveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes simpleReveal2 {
        0% {
            opacity: 0;
            transform: translateY(-100%) scaleX(0.6) ;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: .8;
            transform: translateY(0) scaleX(1);
        }
    }
`;