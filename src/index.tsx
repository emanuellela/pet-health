import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import StartPage from './components/StartPage';
import Login from './components/Login';
import SelectionPetPage from './components/SelectionPetPage';
import PetManagement from './components/PetManagement';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/pets/create' element={<SelectionPetPage/>}></Route>
      <Route path='/pets/home' element={<PetManagement/>}></Route>

    </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
