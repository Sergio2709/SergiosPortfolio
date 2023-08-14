import React from "react";
import { styled } from "styled-components";
import Skill from "./skill/skill";


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
                icon= {"Javascript.jpg"}
                text= {"JavaScript"}
            />
            <Skill 
                icon= {"CSS.png"}
                text = {"CSS"}
            />
            <Skill 
                icon= {"HTML.jpg"}
                text = {"HTML"}
            />
            <Skill 
                icon= {"React.png"}
                text = {"React.js"}
            />
            <Skill 
                icon= {"Python.png"}
                text = {"Python"}
            />
            <Skill 
                icon= {"Java.webp"}
                text = {"Java"}
            />
            <Skill 
                icon= {"SQL.png"}
                text = {"Database"}
            />
            <Skill 
                icon= {"Git.png"}
                text = {"Git"}
            />
            <Skill 
                icon= {"GitHub.webp"}
                text = {"GitHub"}
            />
            <Skill 
                icon= {"Trello.png"}
                text = {"Trello"}
            />
            <Skill 
                icon= {"Jira.png"}
                text = {"Jira"}
            />
            <Skill 
                icon= {"english.png"}
                text = {"English advanced"}
            />
            <Skill 
                icon= {"FbAds.png"}
                text = {"Facebook adds"}
            />
            <Skill 
                icon= {"GoogleAds.png"}
                text = {"Google adds"}
            />
            <Skill 
                icon= {"BussinessSuite.png"}
                text = {"Meta bussiness Suite"}
            />
            <Skill 
                icon= {"GoogleAnalytics.png"}
                text = {"Google analitics"}
            />
    </StyleDiv>
}

export default Skills