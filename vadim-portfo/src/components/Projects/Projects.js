import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, } from './ProjectsStyled'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../MyData/mydata'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.1 }
  }
};

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          {toggle === 'web app' ?
            <ToggleButton active value="web app" >WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" >WEB APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once : true }}
        >
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects