import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/todo" element={<MainPage />} />
        </Routes>
    );
};

export default Pages;
