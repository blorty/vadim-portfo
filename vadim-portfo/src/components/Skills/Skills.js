import React from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { skills } from '../../MyData/mydata'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 5%, 70% 0, 100% 0, 100% 100%, 0 100%);
`



const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 30px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
        }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
        }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the items */
    gap: 30px; /* Maintain a gap between the items */
    margin-top: 20px;
`

const Skill = styled(motion.div)`
    flex: 0 1 calc(33.333% - 40px); // Keep the flex-basis as before
    display: flex;
    flex-direction: column; // Stack child elements vertically
    justify-content: flex-start; // Align children to the start of the main-axis
    align-items: center; // Center items along the cross-axis
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;

    @media (max-width: 1024px) {
        flex: 0 1 calc(50% - 40px); /* Two items per row for smaller screens */
    }

    @media (max-width: 768px) {
        flex: 0 1 100%; /* Full width for mobile */
        margin-left: 15px;
        margin-right: 15px;
    }
`


const SkillTitle = styled.h2`
    align-self: flex-center; 
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`

const SkillList = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`

const SkillItem = styled(motion.div)`
    user-select: none; 
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
        }
        @media (max-width: 500px) {
            font-size: 14px;
            padding: 6px 12px;
        }
`

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`

const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, delayChildren: 0.3, staggerChildren: 0.1 }
    }
};

const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

// Updated Skills component
const CustomSkillItem = ({ item }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Set the transform range for a noticeable movement
    const rotateX = useTransform(y, [-50, 50], [-20, 20]);
    const rotateY = useTransform(x, [-50, 50], [20, -20]);

    function handleMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        // Calculate the difference between the cursor position and the center of the item
        const deltaX = ((e.clientX - rect.left) - (rect.width / 2)) / 5;
        const deltaY = ((e.clientY - rect.top) - (rect.height / 2)) / 5;
        x.set(deltaX);
        y.set(deltaY);
    }

    // Style for glow effect on hover
    const glowStyle = {
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.55)',
    };

    return (
        <SkillItem
            variants={skillItemVariants}
            onMouseMove={handleMouseMove}
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.1, ...glowStyle }}
        >
            <SkillImage src={item.image} />
            {item.name}
        </SkillItem>
    );
};



// Skills component
const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc></Desc>
                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            variants={skillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, itemIndex) => (
                                    <CustomSkillItem 
                                        key={itemIndex}
                                        item={item}
                                    />
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;