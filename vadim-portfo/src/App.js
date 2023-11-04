import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes'
import Navbar from './components/Nav/NavRender';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom right,
    #FF9E80,  
    #D87F67   
  );
  flex-grow: 1; 
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

      <Navbar />

      <Container>

        <Hero />

        <Wrapper>
          <Skills />
          <Education />
        </Wrapper>

      </Container>

    </ThemeProvider>
  )
}

export default App;
