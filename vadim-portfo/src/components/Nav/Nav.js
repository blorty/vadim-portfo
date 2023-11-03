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
    align-items: center;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 24px;
`


const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
    padding: 0 0px;
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
    color: ${({ theme }) => theme.sand_dollar};
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
    border: 1px solid ${({ theme }) => theme.tangerine};
    display: flex;
    height: 70%;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.black_two}; // Black Two for the text color
    :hover {
        background-color: ${({ theme }) => theme.sand_dollar}; 
        color: ${({ theme }) => theme.red}; // Red for the text color on hover
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
    }
`


const LinkedinIcon = styled.div`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
        :hover {
            background: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.white};     
        }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`


const InstagramIcon = styled.div`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
        :hover {
            background: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.white};     
        }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`


const MediumIcon = styled.div`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
        :hover {
            background: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.white};     
        }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
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