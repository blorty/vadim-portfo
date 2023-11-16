import React from 'react';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyled';
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import Headshot from '../../images/hs.jpg';
import Typewriter from 'typewriter-effect';
import { mydata } from '../../MyData/mydata';

// Animation variants
const heroVariants = {
    hidden: { 
        opacity: 0,
        y: -50 // start 50 pixels above its final position
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const buttonVariants = {
    hover: {
      scale: 1.1, // Slightly increase the scale to provide a hover effect
      textShadow: "0px 0px 8px rgba(255, 255, 255, 1)", // Optional: add a text shadow effect on hover
      boxShadow: "0px 5px 15px rgba(97, 54, 89, 0.4)", // Increase the box-shadow size for hover
        transition: {
            duration: 0.2, // Duration of the hover effect
            type: "spring", // Use a spring animation for some bounciness
            stiffness: 300, // How "stiff" the spring is
        },
        },
        tap: {
        scale: 0.9, // Decrease the scale slightly to give a tap effect
        boxShadow: "0px 2px 10px rgba(97, 54, 89, 0.2)", // Decrease the box-shadow size for tap
        transition: {
            duration: 0.1, // Duration of the tap effect
        },
        },
    };

    const subTitleVariants = {
        hidden: {
            opacity: 0,
            y: 30 // Start a bit lower
            },
            visible: {
            opacity: 1,
            y: 0, // Move to the original position
            transition: {
                duration: 0.5, // How long the animation takes
                ease: "easeOut", // Type of easing
                delay: 0.2, // Wait before starting the animation
            }
            }
        };
    
        const heroImageVariants = {
            drag: {
              scale: 1.1, // Optional: change the scale when dragging
              boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)", // Optional: add a shadow when dragging\
            },
        };

        const heroImageConstraints = {
            top: -50,
            right: -50,
            bottom: -50,
            left: -50,
        };

    const HeroSection = () => {
        return (
            <div id="about">
                <HeroContainer
                    initial="hidden"
                    animate="visible"
                    variants={heroVariants}
                >
                    <HeroBg>
                        <HeroAnimation />
                    </HeroBg>
                    <HeroInnerContainer>
                        <HeroLeftContainer id="Left">
                            <Title>Hi, I am <br /> {mydata.name}</Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: mydata.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            <SubTitle
                                variants={subTitleVariants}
                                initial="hidden"
                                animate="visible"
                            >{mydata.description}</SubTitle>
                            <ResumeButton
                                href={mydata.resume}
                                target='_blank'
                                rel='noopener noreferrer'
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                View My Resume
                            </ResumeButton>
                        </HeroLeftContainer>
                        <HeroRightContainer id="Right">
                        <Img 
                            src={Headshot} 
                            alt="hero-image"
                            variants={heroImageVariants}
                            drag // Enable dragging
                            dragConstraints={heroImageConstraints} // Set drag constraints
                            whileDrag="drag" // Apply the "drag" variant when dragging
                            />
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </HeroContainer>
            </div>
        );
    };
    
    export default HeroSection;
