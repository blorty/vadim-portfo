import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, } from './ProjectsStyled'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../MyData/mydata'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup>
          {/* Toggle logic should be updated to handle clicks and set the toggle state */}
          <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')} >
            WEB APP'S
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .filter((project) => toggle === 'all' || project.category === toggle)
            .map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              </motion.div>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;