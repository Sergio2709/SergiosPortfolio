import React from "react";
import styled from "styled-components"
import Icon from '@mdi/react';
import {mdiFileDocumentOutline, mdiLinkedin, mdiWhatsapp, mdiGithub } from '@mdi/js';
import fotoPerfil from '../../img/Perfil.jpg'
import CV from '../../docs/CV - Sergio Castillo - FED - ColD.pdf'

const StyledDiv = styled.div`
    background:linear-gradient(#a91998,#1a779f,#a91998);
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding:.7rem 4%;
    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`

const Presentacion = styled.p`
    font-size:1.2rem;
    text-align:center;
    margin : auto;
    width: 50%;
    color: white;
    @media screen and (max-width:900px) {
        width: 100%;
        order: 1;
    }
`

const Image = styled.img`
    width: 33%;
    height: 30vw;     
    border-radius: 1vw;
    @media screen and (max-width:900px) {
        width: 100%;
        height: auto;
        order: 2;
    }
`

const SocialBox = styled.ul`
    padding: 1vw;
    background: white;
    width: 12%;
    height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    border-radius: 1vw;
    @media screen and (max-width:900px) {
        flex-direction: row;
        width: 97%;
        height: auto;
    }
`

const SocialIcon = styled.a`
    padding: 5%;
    color: #1a779f;
    align-content: center;
    & :hover{
        color: #4fc6fa;

    }
    @media screen and (max-width:900px) {
        padding: 1%;
    }
`

function Home () {
    
    return <StyledDiv>
        <Image src={fotoPerfil} alt="perfil"/>
        <Presentacion>
            Welcome to my personal web page, I'm Sergio Castillo, 
            I'm 22 years old, I'm Colombian, I live in Bogotá, 
            I'm single, I’m front end developer, I have knowledge in Java, 
            Python, JavaScript, React.js, HTML, CSS, Git and GitHub, 
            Database SQL and No SQL, I develop pages with different 
            requirements in accordance with the customer. I include 
            different technologies to do small, medium or big web pages. 
            I'm ambitius and dedicated to learn more technologies, I have 
            the skill to adaptability
        </Presentacion>
        <SocialBox>
            <SocialIcon href={CV}><Icon path={mdiFileDocumentOutline} size={2}/></SocialIcon>
            <SocialIcon href="https://wa.me/qr/LEA7HHIAIHUMK1"><Icon path={mdiWhatsapp} size={2}/></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sergio-castillo-programador/"><Icon path={mdiLinkedin}  size={2}/></SocialIcon>
            <SocialIcon href="https://github.com/Sergio2709"><Icon path={mdiGithub }  size={2}/></SocialIcon>
        </SocialBox>
    </StyledDiv>
}

export default Home
