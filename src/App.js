import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

const Home = () => (
    <div>
        <h1>Welcome to the Home Page</h1>
    </div>
);

const NotFound = () => (
    <div>
        <h1>404 - Not Found</h1>
    </div>
);

export default App;
