import React from "react";
import { styled } from "styled-components";

const StyledHobbie = styled.div`
    width: 20%;
    height: 20vw;
    border-radius: 1vw;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 1.5%;
    margin: 1%;
    @media screen and (max-width:940px) {
        width: 45%;
        height: 30vw;
    }
    @media screen and (max-width:840px) {
        height: 40vw;
    }
    @media screen and (max-width:490px) {
        height: 50vw;
    }
`

const Icon = styled.img`
    width: 50%;
    margin: 1%;
`

const Text = styled.p`
    width: auto;
    font-size:1.5rem;
    color: #1a779f;
    font-weight: bold;
    text-align: center;
`

function Hobbie (props) {
    const {icon, text} = props;
    return <StyledHobbie>
        <Icon src={icon} alt={text}/>
        <Text>{text}</Text>
    </StyledHobbie>
}

export default Hobbie
