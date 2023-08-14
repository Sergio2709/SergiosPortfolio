import React from "react";
import { styled } from "styled-components";
import Project from "./project/project";
import encriptador from '../../img/Encriptador.png'


const MainTittle = styled.h3`
    width: 100%;
    color: white;
    font-size: 4vw;
    text-align: center;
    justify-content: space-around;
`

const StyleDiv = styled.div`
    background:linear-gradient(#a91998,#1a779f,#a91998);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding:.7rem 4%;
`

function Projects(){
    return <StyleDiv>
        <MainTittle>PROJECTS</MainTittle>
            <Project
                tittle={"Encriptador de codigo"}
                view={encriptador}
                URL={"https://sergio2709.github.io/Encriptador/"}
                repository={"https://github.com/Sergio2709/Encriptador"}
            />
    </StyleDiv>
}

export default Projects
