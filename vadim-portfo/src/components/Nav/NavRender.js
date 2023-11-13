import React from 'react'
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, NavContainer, NavItems, NavLink, NavLogo, Span, NavStyled } from './NavStyled'
import { FaRegSmile } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { mydata } from '../../MyData/mydata';
import { useTheme } from 'styled-components';

const NavRender = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    return (
        <NavStyled>
        <NavContainer>
            <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                <FaRegSmile size="3rem" /> <Span></Span>
            </a>
            </NavLogo>
            <MobileIcon>
            <FaBars onClick={() => {
                setIsOpen(!isOpen)
            }} />
            </MobileIcon>
            <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
            <GitHubButton href={mydata.github} target="_blank">My Github</GitHubButton>
            </ButtonContainer>
            {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
                <MobileLink href="#about" onClick={() => {
                setIsOpen(!isOpen)
                }}>About</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                setIsOpen(!isOpen)
                }}>Skills</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                setIsOpen(!isOpen)
                }}>Experience</MobileLink>
                <MobileLink href='#projects' onClick={() => {
                setIsOpen(!isOpen)
                }}>Projects</MobileLink>
                <MobileLink href='#education' onClick={() => {
                setIsOpen(!isOpen)
                }}>Education</MobileLink>
                <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={mydata.github} target="_blank">Github Profile</GitHubButton>
            </MobileMenu>
            }
        </NavContainer>
        </NavStyled>
    )
}

export default NavRender