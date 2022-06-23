import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layouts/mainLayout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';

export const mediaWidth = {
  forst:'1024px',
  2:'300px'
}

function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}  />
            {/* <Route path='' element={} /> */}
            {/* <Route path='' element={} /> */}
            {/* <Route path='' element={} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
