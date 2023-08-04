import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Task from './pages/Task';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Update from './pages/Update';

const App = () => {
    return (<>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/tasks' element={<Task/>} />
            <Route path='/api/:id' element={<Update />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </>)
}

export default App;