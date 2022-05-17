import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Pages = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
};

export default Pages;
