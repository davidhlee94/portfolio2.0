import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Photography from './Pages/Photography';
import Sport from './Pages/Sport';
import Personal from './Pages/Personal';
import Portrait from './Pages/Portrait';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/portrait" element={<Portrait />} />
        <Route path="/photography/personal" element={<Personal />} />
        <Route path="/photography/sport" element={<Sport />} />
      </Routes>
    </div>

  );
}

export default App;
