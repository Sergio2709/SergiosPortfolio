import React from "react";
import { styled } from "styled-components";

const StyledCareers = styled.div`
    width: 45%;
    height: 60vw;
    border-radius: 1vw;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 2%;
    @media screen and (max-width:900px) {
        width: 95%;
        height: auto;
        margin: 2%;
    }
`

const Tittle = styled.h4`
    color: #1a779f;
    font-size: 2.5rem;
    margin: 1%;
`

const Specialization = styled.h5`
    color: #1a779f;
    font-size: 1.5rem;
    margin: 2%
`

const Description = styled.p`
    color: #1a779f;
    font-size: 1rem;
    text-align: center;
`

const Studies = styled.p`
    color: #1a779f;
    font-size: 1rem;
    text-align: center;
`

const Images = styled.img`
    height: 20vw;
    width: auto;
    border-radius: 1vw;

`


function Careers (props) {
    const {career, specialization, description, studies, image, imageName} = props;
    return <StyledCareers>
        <Tittle>{career}</Tittle>
        <Specialization>{specialization}</Specialization>
        <Description>{description}</Description>
        <Studies>{studies}</Studies>
        <Images src={image} alt={imageName}/>
    </StyledCareers>
}

export default Careers