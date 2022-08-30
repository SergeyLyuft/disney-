import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Headers from "./components/Headers"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Headers />
      <Routes>
          <Route path="/" element={<Login/>} />
      </Routes>
    </div>

    </BrowserRouter>
    
  );
}

export default App;
