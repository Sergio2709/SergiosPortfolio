import React from "react";
import { styled } from "styled-components";


const StyledSkill = styled.div`
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

function Skill (props) {
    const {icon, text} = props;
    return <StyledSkill>
        <Icon src={"/img/"+icon} alt={text}/>
        <Text>{text}</Text>
    </StyledSkill>
}

export default Skill