import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Utbildning from './pages/Utbildning';
import Arbetslivserfarenhet from './pages/Arbetslivserfarenhet';



function App() {
  return (
    <div className="App">
      <Wrapper>
      <BrowserRouter>
      <Nav /> 
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utbildning" element={<Utbildning />} />
      <Route path="/arbetslivserfarenhet" element={<Arbetslivserfarenhet />} />
      </Routes>
      </BrowserRouter>
      </Wrapper>
      
    </div>
  );
}

const Wrapper = styled.div`
padding: 4em;
box-sizing: border-box;
`
export default App;