import React from 'react';
import { animate, useMotionValue, useTransform } from 'framer-motion';
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
            scale: 1.1,
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)",
            transition: { duration: 0.05 }
        },
        dragEnd: {
            scale: 1,
             x: 0, // Reset X position to initial
            y: 0, // Reset Y position to initial
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
        const scale = useTransform(x, [-1500, 0, 500], [0, 1, 1.75]);
    
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
