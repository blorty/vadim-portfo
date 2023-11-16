import React from 'react'
import { motion } from 'framer-motion';
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, NavContainer, NavItems, NavLink, NavLogo, Span, NavStyled } from './NavStyled'
import { FaBars } from 'react-icons/fa';
import { mydata } from '../../MyData/mydata';
import { useTheme } from 'styled-components';
import VLlogo from '../../images/VL2.png';


const navItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50 }
        },
        hover: {
        scale: 1.1, // Scale up slightly on hover
        transition: { type: "spring", stiffness: 300, damping: 10 }
        }
    };


const navListVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,  // Stagger the children by 0.1 seconds
        }
    },
    hidden: {}
};


const mobileMenuVariants = {
    closed: { 
        opacity: 0, 
        y: -20, 
        display: 'none'
    },
    open: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
        display: 'flex'  // or 'block' depending on your layout
    }
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            // Shorten the duration for a quicker response
            duration: 0.01, // Try making this even shorter if needed
            type: "spring",
            stiffness: 300,
        },
        },
        tap: {
        scale: 0.95,
        transition: {
            // Shorten the duration for a quicker response
            duration: 0.05, // Try making this even shorter if needed
        },
        },
    };  


const NavRender = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();

    return (
        <NavStyled>
            <NavContainer>
                <NavLogo to='/'>
                    <img src={VLlogo} alt="VL Logo" style={{ height: '3rem', cursor: 'pointer' }} />
                </NavLogo>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </MobileIcon>
                <NavItems
                    variants={navListVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <NavLink 
                        href="#about" 
                        variants={navItemVariants} 
                        whileHover="hover"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        href='#skills' 
                        variants={navItemVariants} 
                        whileHover="hover"
                    >
                        Skills
                    </NavLink>
                    <NavLink 
                        href='#experience' 
                        variants={navItemVariants} 
                        whileHover="hover"
                    >
                        Experience
                    </NavLink>
                    <NavLink 
                        href='#projects' 
                        variants={navItemVariants} 
                        whileHover="hover"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        href='#education' 
                        variants={navItemVariants} 
                        whileHover="hover"
                    >
                        Education
                    </NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        href={mydata.github} 
                        target="_blank">
                        My Github
                    </GitHubButton>
                </ButtonContainer>
                {isOpen && (
                    <MobileMenu
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    >
                        <MobileLink href="#about" onClick={() => setIsOpen(false)}>
                            About
                        </MobileLink>
                        <MobileLink href='#skills' onClick={() => setIsOpen(false)}>
                            Skills
                        </MobileLink>
                        <MobileLink href='#experience' onClick={() => setIsOpen(false)}>
                            Experience
                        </MobileLink>
                        <MobileLink href='#projects' onClick={() => setIsOpen(false)}>
                            Projects
                        </MobileLink>
                        <MobileLink href='#education' onClick={() => setIsOpen(false)}>
                            Education
                        </MobileLink>
                        <GitHubButton 
                            style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} 
                            href={mydata.github} 
                            target="_blank"
                        >
                            Github Profile
                        </GitHubButton>
                    </MobileMenu>
                )}
            </NavContainer>
        </NavStyled>
    );
}

export default NavRender;
