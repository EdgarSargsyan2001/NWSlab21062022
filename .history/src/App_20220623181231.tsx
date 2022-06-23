import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layouts/mainLayout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';



function App() {
  return (
    < >
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}  />
            {/* <Route path='' element={} /> */}
            {/* <Route path='' element={} /> */}
            {/* <Route path='' element={} /> */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
