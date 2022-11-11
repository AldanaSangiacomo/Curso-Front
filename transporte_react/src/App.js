

import './styles/normalize.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Nav from './componentes/layout/Nav';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/nosotros' element={<NosotrosPage />}></Route>
          <Route path='/servicios' element={<GaleriaPage />}></Route>
          <Route path='/galeria' element={<ServiciosPage />}></Route>
          <Route path='/contacto' element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
