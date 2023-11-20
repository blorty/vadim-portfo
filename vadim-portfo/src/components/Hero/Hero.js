import React from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyled';
import HeroAnimation from '../HeroAnimation/HeroAnimation';
import Headshot from '../../images/hs4.jpg';
import Typewriter from 'typewriter-effect';
import { mydata } from '../../MyData/mydata';

    const heroVariants = {
        hidden: { 
            opacity: 0,
            y: -50 
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
        scale: 1.1, 
        textShadow: "0px 0px 8px rgba(255, 255, 255, 1)", 
        boxShadow: "0px 5px 15px rgba(97, 54, 89, 0.4)", 
            transition: {
                duration: 0.2, 
                type: "spring", 
                stiffness: 300, 
            },
            },
            tap: {
            scale: 0.9, 
            boxShadow: "0px 2px 10px rgba(97, 54, 89, 0.2)", 
            transition: {
                duration: 0.1, 
            },
            },
        };

    const subTitleVariants = {
        hidden: {
            opacity: 0,
            y: 30 
            },
            visible: {
            opacity: 1,
            y: 0, 
            transition: {
                duration: 0.5, 
                ease: "easeOut", 
                delay: 0.2, 
            }
            }
        };
    
    const heroImageVariants = {
        drag: {
            scale: 1.1,
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)",
            transition: { duration: 0.05 }
        },
        dragEnd: {
            scale: 1,
            x: 0, 
            y: 0, 
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const heroImageConstraints = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    const HeroSection = () => {
        // Create motion values for x and y
        const x = useMotionValue(0);
        const y = useMotionValue(0);
    
        // Use the useTransform hook to interpolate the scale based on the x and y values
        const scale = useTransform(x, [-1500, 0, 1000], [0, 1, 2.5]);
    
        // Use this method to animate the scale back to 1 when dragging ends
        const animateScale = () => {
            animate(scale, 1, {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            });
        };
    
        // Handle what happens when drag ends
        const onDragEnd = () => {
            // Animate x and y back to their original position
            animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
            animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
    
            // Call the animateScale method to animate the scale back to 1
            animateScale();
        };

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
                            style={{ x, y, scale }} // Apply the motion values directly
                            drag
                            dragConstraints={heroImageConstraints}
                            dragElastic={1}
                            onDragStart={() => {}}
                            onDragEnd={onDragEnd}
                            variants={heroImageVariants} // Use your defined variants here
                            initial="dragEnd" // Start with the dragEnd state
                            whileDrag="drag" // Use the drag variant while dragging
                        />
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </HeroContainer>
            </div>
        );
    };
    
    export default HeroSection;
