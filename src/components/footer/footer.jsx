import React from "react";
import styled from "styled-components";

const StyleFooter = styled.header`
    background: linear-gradient(#a91998,#1a779f);
    padding:.7rem 4%;
`

const StyleInfo = styled.div`
    background: white;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem;
    border-radius: 1vw;
`

const StyledLogo = styled.img`
    color:#1a779f;
    width:8vw;
`

const StyleText = styled.h1`
    color:#1a779f;
    font-size: 2VW;
`

function Footer() {
    return <StyleFooter>
        <StyleInfo>
            <StyledLogo src="/img/logo negro.png" alt="Logo"/>
            <StyleText> Developed by Sergio Castillo </StyleText>
        </StyleInfo>            
    </StyleFooter>
}

export default Footer