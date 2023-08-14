import React from "react";
import { styled } from "styled-components";
import Skill from "./skill/skill";
import JS from '../../img/Javascript.jpg';
import CSS from '../../img/CSS.png';
import HTML from '../../img/HTML.jpg';
import ReactJS from '../../img/React.png';
import Python from '../../img/Python.png';
import Java from '../../img/Java.webp';
import SQL from '../../img/SQL.png';
import Git from '../../img/Git.png';
import GitHub from '../../img/GitHub.webp';
import Trello from '../../img/Trello.png';
import Jira from '../../img/Jira.png';
import EN from '../../img/english.png';
import FbAds from '../../img/FbAds.png';
import GGAds from '../../img/GoogleAds.png';
import BS from '../../img/BussinessSuite.png';
import GGA from '../../img/GoogleAnalytics.png';

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

function Skills(){
    return <StyleDiv>
        <MainTittle>SKILLS</MainTittle>
            <Skill
                icon= {JS}
                text= {"JavaScript"}
            />
            <Skill 
                icon= {CSS}
                text = {"CSS"}
            />
            <Skill 
                icon= {HTML}
                text = {"HTML"}
            />
            <Skill 
                icon= {ReactJS}
                text = {"React.js"}
            />
            <Skill 
                icon= {Python}
                text = {"Python"}
            />
            <Skill 
                icon= {Java}
                text = {"Java"}
            />
            <Skill 
                icon= {SQL}
                text = {"Database"}
            />
            <Skill 
                icon= {Git}
                text = {"Git"}
            />
            <Skill 
                icon= {GitHub}
                text = {"GitHub"}
            />
            <Skill 
                icon= {Trello}
                text = {"Trello"}
            />
            <Skill 
                icon= {Jira}
                text = {"Jira"}
            />
            <Skill 
                icon= {EN}
                text = {"English advanced"}
            />
            <Skill 
                icon= {FbAds}
                text = {"Facebook adds"}
            />
            <Skill 
                icon= {GGAds}
                text = {"Google adds"}
            />
            <Skill 
                icon= {BS}
                text = {"Meta bussiness Suite"}
            />
            <Skill 
                icon= {GGA}
                text = {"Google analitics"}
            />
    </StyleDiv>
}

export default Skills
