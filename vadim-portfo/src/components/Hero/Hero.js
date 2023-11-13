import React from 'react'
import HeroAnimation from '../HeroAnimation/HeroAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyled'
import Headshot from '../../images/hs.jpg'
import Typewriter from 'typewriter-effect';
import { mydata } from '../../MyData/mydata';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroAnimation />
                </HeroBg>
                <HeroInnerContainer >
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
                        <SubTitle>{mydata.description}</SubTitle>
                        <ResumeButton
                            href={mydata.resume}
                            target='display'
                            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px #C197D2" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={Headshot} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection