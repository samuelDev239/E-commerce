import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Produtos from './components/Produtos';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Produto from './components/Produto';

  


const App = () => {
const api = ``
  return (
    <>
    <div className='App'>
  <BrowserRouter>
      <Header />
  <div className='conteudo'>
   <Routes>
    <Route path='/' element={<Produtos />}></Route>
    <Route path='produto/:id' element={<Produto />}></Route>
    <Route path='contato' element={<Contato />}></Route>
  </Routes>
  </div>
    
    </BrowserRouter>
   
    </div>
    <Footer />
    </>
    
  

  );
 
  }
    
    
    

  
   


export default App
