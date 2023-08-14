import React from "react";
import { styled } from "styled-components";
import Hobbie from "./hobbie/hobbie";
import Tech from '../../img/Tech.png'; 
import Webpage from '../../img/Webpage.avif';
import Logos from '../../img/Logos.avif';
import Cooking from '../../img/cooking.png';
import Exercise from '../../img/Exercise.jpg'; 
import Soccer from '../../img/soccer.webp';
import Videogames from '../../img/Videogames.avif';
import Settings from '../../img/Settings.png';

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

function Hobbies(){
    return <StyleDiv>
        <MainTittle>HOBBIES</MainTittle>
            <Hobbie
                icon= {Tech}
                text= {"Read about Technology"}
            />
            <Hobbie
                icon= {Webpage}
                text= {"Create web pages"}
            />
            <Hobbie
                icon= {Logos}
                text= {"Create Logos"}
            />
            <Hobbie
                icon= {Cooking}
                text= {"Cooking"}
            />
            <Hobbie
                icon= {Exercise}
                text= {"Do exercise"}
            />
            <Hobbie
                icon= {Soccer}
                text= {"Play Soccer"}
            />
            <Hobbie
                icon= {Videogames}
                text= {"Play Videogames"}
            />
            <Hobbie
                icon= {Settings}
                text= {"Set technology"}
            />
    </StyleDiv>
}

export default Hobbies
