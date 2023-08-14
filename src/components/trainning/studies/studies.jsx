import React from "react";
import { styled } from "styled-components";

const StyledStudies = styled.div`
    width: 45%;
    height: 45vw;
    border-radius: 1vw;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 1%;
    margin: 1%;
    text-align: center;
    @media screen and (max-width:940px) {
        width: 95%;
        height: auto;
    }
    
`

const Tittle = styled.h4`
    color: #1a779f;
    font-size: 2.5rem;
    margin: 1%;
`

const School = styled.h5`
    color: #1a779f;
    font-size: 1.5rem;
    margin: 2%
`

const Year = styled.p`
    color: #1a779f;
    font-size: 1rem;
    text-align: center;
`

const Image = styled.img`
    height: 20vw;
    width: 80%;
    border-radius: 1vw;
    @media screen and (max-width:940px) {
        width: 95%;
        height: auto;
    }

`


function Studies (props) {
    const {career, school, year, image} = props;
    return <StyledStudies>
        <Tittle>{career}</Tittle>
        <School>{school}</School>
        <Year>{year}</Year>
        <Image src={"/img/"+image} alt={school}/>
    </StyledStudies>
}

export default Studies