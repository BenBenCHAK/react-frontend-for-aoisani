import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Art } from './pages/Art'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

import { useEffect, useState } from "react";

type Misc = {
  aboutme: string[];
  copyright: string;
};

function App() {
  const miscURL = "https://sunnylui823.github.io/misc.json";

  const [misc, setMisc] = useState<Misc>();
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(miscURL)
      .then((response) => response.json())
      .then((responseData) => setMisc(responseData))
      .catch((err) => setError(err));
  }, []);

  return <>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/art' element={<Art />} />
        <Route path='/about' element={<About misc={misc} error={error} />} />
        <Route path='/time' element={<span>{new Date().toJSON()}</span>} />
        <Route path='*' element={<h1>4040404040404</h1>} />
      </Routes>
    </Container>
    <Container className="d-flex justify-content-center">
      <span style={{ fontSize: "0.5rem" }}>Copyright &copy; {misc?.copyright ?? "AoiSani"}.</span>
    </Container>
  </>
}

export default App
