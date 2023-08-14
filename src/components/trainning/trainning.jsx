import React from "react";
import { styled } from "styled-components";
import Studies from "./studies/studies";


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


function Trainning(){
    return <StyleDiv>
        <MainTittle>TRAINNING</MainTittle>
            <Studies
                career={"Front End React Programmer"}
                school={"Alura Latam - Oracle Next education"}
                year={"December 2022 - June 2023"}
                image= {"ONE.png"}
            />
            <Studies
                career={"Web App Developer"}
                school={"Universidad Nacional de Colombia - Mision TIC"}
                year={"May 2022 - december 2022"}
                image= {"UNAL.jpg"}
            />
            <Studies
                career={"Marketing Digital"}
                school={"Next U "}
                year={"Ene 2021 - december 2021"}
                image= {"NEXT.webp"}
            />
    </StyleDiv>
}

export default Trainning