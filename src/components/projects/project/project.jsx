import React from "react";
import { styled } from "styled-components";

const StyledProject = styled.div`
    width: 95%;
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
        height: auto;
    }
`

const Tittle = styled.h4`
    color: #1a779f;
    font-size: 2.5rem;
    margin: 1%;
    @media screen and (max-width:750px) {
        font-size: 1.5rem;
    }
`

const Page = styled.a`
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    cursor: pointer;
    text-decoration: none;
`

const View = styled.img`
    width: 80%;
`

const Buttons = styled.div`
    width: 80%;
    height: 15%;
    margin: 1vw;
    padding: 1vw;
    display: flex;
    justify-content: space-around;
    

`
const ButtonVisit = styled.button`
    font-size: 1.5rem;
    border-radius: 1vw;
    background:#1a779f;
    width: 25%;
    padding: 1vw;
    & :hover{
        color: #4fc6fa;
        
    }
    @media screen and (max-width:800px) {
        width: 40%;
    }
    @media screen and (max-width:600px) {
        font-size: 1rem;
    }
`


function Project (props) {
    const {tittle, view, URL, repository} = props;
        return<StyledProject>
            <Tittle>{tittle}</Tittle>
            <View src={"/img/"+view} alt={tittle}/>
            <Buttons>
                <ButtonVisit> 
                    <Page href={URL}> Website </Page>
                </ButtonVisit>
                <ButtonVisit> 
                    <Page href={repository}> Repository </Page>
                </ButtonVisit>
            </Buttons>
        </StyledProject>
}

export default Project