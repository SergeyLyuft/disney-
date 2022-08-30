import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
      <Routes>
          <Route path="/" element={<Login/>} />
      </Routes>
    </div>

    </BrowserRouter>
    
  );
}

export default App;
