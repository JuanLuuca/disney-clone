import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/FooterPage/Footer';
import Login from './components/LoginDisney+/Login';
import Home from './components/HomePage/Home';
import Detail from './components/Detail/Detail';
import NotFoundPage from './components/NotFoundPage/NotFound';
import './App.css';




function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/detail/:id' element={<Detail />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
