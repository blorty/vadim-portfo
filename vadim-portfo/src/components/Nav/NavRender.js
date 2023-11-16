import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, NavContainer, NavItems, NavLink, NavLogo, NavStyled, MobileGitHubButton } from './NavStyled'
import { FaBars } from 'react-icons/fa';
import { mydata } from '../../MyData/mydata';
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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                // Shorten the duration for a quicker response
                duration: 0.05, // Try making this even shorter if needed
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

        const mobileMenuVariants = {
            closed: { 
                opacity: 0, 
                scale: 0.95, 
                transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1, 
                    when: "afterChildren"
                }
            },
            open: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                    staggerChildren: 0.05,
                    delayChildren: 0.05
                }
            }
        };
        
        const mobileLinkVariants = {
            closed: { 
                y: -20, 
                opacity: 0,
                transition: { duration: 0.01, ease: "easeInOut" }
            },
            open: { 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.01, ease: "easeInOut" }
            }
        };        

        const NavRender = () => {
            const [isOpen, setIsOpen] = React.useState(false);
        
            return (
                <NavStyled>
                    <NavContainer>
                        <NavLogo to='/'>
                            <img src={VLlogo} alt="VL Logo" style={{ height: '3rem', cursor: 'pointer' }} />
                        </NavLogo>
                        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                            <FaBars />
                        </MobileIcon>
                        <NavItems variants={navListVariants} initial="hidden" animate="visible">
                            {/* Desktop Navigation Links */}
                            <NavLink href="#about" variants={navItemVariants} whileHover="hover">About</NavLink>
                            <NavLink href='#skills' variants={navItemVariants} whileHover="hover">Skills</NavLink>
                            <NavLink href='#experience' variants={navItemVariants} whileHover="hover">Experience</NavLink>
                            <NavLink href='#projects' variants={navItemVariants} whileHover="hover">Projects</NavLink>
                            <NavLink href='#education' variants={navItemVariants} whileHover="hover">Education</NavLink>
                        </NavItems>
                        <ButtonContainer>
                            <GitHubButton
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                href={mydata.github} 
                                target="_blank"
                            >
                                My Github
                            </GitHubButton>
                        </ButtonContainer>
                        <AnimatePresence>
                            {isOpen && (
                                <MobileMenu
                                    variants={mobileMenuVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    {/* Mobile Navigation Links */}
                                    <MobileLink variants={mobileLinkVariants} href="#about">About</MobileLink>
                                    <MobileLink variants={mobileLinkVariants} href="#skills">Skills</MobileLink>
                                    <MobileLink variants={mobileLinkVariants} href="#experience">Experience</MobileLink>
                                    <MobileLink variants={mobileLinkVariants} href="#projects">Projects</MobileLink>
                                    <MobileLink variants={mobileLinkVariants} href="#education">Education</MobileLink>
                                    <MobileGitHubButton 
                                        variants={mobileLinkVariants}
                                        href={mydata.github} 
                                        target="_blank"
                                    >
                                        Github Profile
                                    </MobileGitHubButton>
                                </MobileMenu>
                            )}
                        </AnimatePresence>
                    </NavContainer>
                </NavStyled>
            );
        }

export default NavRender;
