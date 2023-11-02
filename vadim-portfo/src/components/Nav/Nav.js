import React from "react";
import styled from "styled-components";
import { Link as LinkR, NavLink as LinkNav } from "react-router-dom"; 



const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`


const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
`


const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    @media screen and (max-width: 640px) {
        padding: 0 0px
    }
`


const ResponsiveIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`


const NavItems = styled.ul`
    width: 100%;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`


const StyledNavLink = styled(LinkNav)` // Renamed NavLink to StyledNavLink
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;  
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;


const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    @media screen and (max-width: 640px) {
        display: none;
    }
`


const GithubIcon = styled.div`
    border: 1px solid ${({ theme }) => theme.text_primary};
    display: flex;
    height: 70%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.text_primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`


const LinkedinIcon = styled.div`
    border: 1px solid ${({ theme }) => theme.text_primary};
    display: flex;
    height: 70%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.text_primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`


const InstagramIcon = styled.div`
    border: 1px solid ${({ theme }) => theme.text_primary};
    display: flex;
    height: 70%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.text_primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`


const MediumIcon = styled.div`
    border: 1px solid ${({ theme }) => theme.text_primary};
    display: flex;
    height: 70%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.text_primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">Logo</NavLogo> 
                <ResponsiveIcon />
                <NavItems>
                    <StyledNavLink to="/">Home</StyledNavLink> 
                </NavItems>
                <IconContainer>
                    <GithubIcon>GitHub</GithubIcon>
                    <LinkedinIcon>LinkedIn</LinkedinIcon>
                    <InstagramIcon>Instagram</InstagramIcon>
                    <MediumIcon>Medium</MediumIcon>
                </IconContainer>
            </NavContainer>
        </Nav>
    );
};


export default Navbar;