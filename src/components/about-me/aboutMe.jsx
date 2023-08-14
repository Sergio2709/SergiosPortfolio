import React from "react";
import { styled } from "styled-components";
import Careers from "./careers/careers";
import programming from '../../img/programming.jpg'
import marketing from '../../img/marketing.jpg'

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

function AboutMe(){
    return <StyleDiv>
        <MainTittle>ABOUT ME</MainTittle>
            <Careers 
                career={"Programmer"}
                specialization={"Front End Developer"}
                description={"I'm specialized in React.js, because I like desing things in accordance with the requirements, During 2 years I learnt about different technologies, languages, librarys and Frameworks, like Python, Java, JavaScript, HTML, CSS, SQL and NoSQL databases, Git and GitHub, Jira, Trello, Django, Flask, React, Angular, and other, I have the skill to adapt my knowledge to the different enviroments"}
                studies= {"Alura - Front End Specialist - 2023,  UNAL - Web page developer - 2022"}
                image= {programming}
                imageName={"Programming"}
            />
            <Careers 
                career={"Marketing"}
                specialization={"Marketing specialist"}
                description={"I'm specialized in social network, because I found the necessity to know about digital sales, in this technology age is very important because all bussiness are translate their infrastructure at digital world, I learn about google ads, google trends, facebook ads, meta business center, SEO and SEM, engagement, brand positioning and other, I develop the skill to improve campaings in accordance with the analitics "}
                studies= {"Next U - Marketing Specialist - 2021"}
                image= {marketing}
                imageName = {"marketing digital"}
            />


    </StyleDiv>
}

export default AboutMe
