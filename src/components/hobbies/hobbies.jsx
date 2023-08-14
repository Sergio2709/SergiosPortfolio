import React from "react";
import { styled } from "styled-components";
import Hobbie from "./hobbie/hobbie";


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
                icon= {"Tech.png"}
                text= {"Read about Technology"}
            />
            <Hobbie
                icon= {"Webpage.avif"}
                text= {"Create web pages"}
            />
            <Hobbie
                icon= {"Logos.avif"}
                text= {"Create Logos"}
            />
            <Hobbie
                icon= {"cooking.png"}
                text= {"Cooking"}
            />
            <Hobbie
                icon= {"Exercise.jpg"}
                text= {"Do exercise"}
            />
            <Hobbie
                icon= {"soccer.webp"}
                text= {"Play Soccer"}
            />
            <Hobbie
                icon= {"Videogames.avif"}
                text= {"Play Videogames"}
            />
            <Hobbie
                icon= {"Settings.png"}
                text= {"Set technology"}
            />

    </StyleDiv>
}
export default Hobbies