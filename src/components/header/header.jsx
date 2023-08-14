import React ,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";
import { Sling as Hamburger } from 'hamburger-react'

const StyleHeader = styled.header`
    background: linear-gradient(#1a779f,#a91998);
    padding:.7rem 4%;
`

const StyleInfo = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem;
`

const StyledLogo = styled.img`
    width:8vw;
`

const StyleTittle = styled.h1`
    color:#ffffff;
    font-size: 4.5VW;
`

const StylePhoto = styled.img`
    width:8vw;
    border-radius:2.5vw;
    
`

const NavBar = styled.div`
    width: 100%;
    background: white;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem;
    border-radius: 1vw;

    @media screen and (max-width:1024px){
        flex-direction: column;
        justify-content: left;
        align-items: left;

    }
`


function Header() {
    const [nav, setNav] = useState("nav hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setNav("nav visible")
        }
        else {
            setNav("nav hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return <StyleHeader>
        <StyleInfo>
            <StyledLogo src="/img/logo blanco.png" alt="Logo"/>
            <StyleTittle>Sergio Ivan Castillo Carrillo</StyleTittle>
            <StylePhoto src="/img/Sergio.jpg" alt="Foto" />
        </StyleInfo>
        <StyleInfo>
            <NavBar>
                <Hamburger className="hamburger-react" direction="left" color="#1a779f" hideOutline={false} onToggle={updateMenu}></Hamburger>
                <Link className={nav} to="/">HOME</Link>
                <Link className={nav} to="/me">ABOUT ME</Link>
                <Link className={nav} to="/skills">SKILLS</Link>
                <Link className={nav} to="/hobbies">HOBBIES</Link>
                <Link className={nav} to="/trainning">TRAINNING</Link>
                <Link className={nav} to="/projects">PROJECTS</Link>
                <Link className={nav} to="/contact">CONTACT</Link>
            </NavBar>
        </StyleInfo>            
    </StyleHeader>
}

export default Header