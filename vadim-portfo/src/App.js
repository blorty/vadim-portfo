import React from 'react';
import { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Themes'
import Navbar from './components/Nav/NavRender';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetails from './components/Projects/ProjectDetails';

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  flex-grow: 1; 
`



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar />
      <Container>
        <Hero />

        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>

        <Projects openModal={openModal} setOpenModal={setOpenModal} />

        <Wrapper>
          <Education />
          <Contact />
        </Wrapper>

        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
        
      </Container>
    </ThemeProvider>
  )
}

export default App;
