import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import TodoLogout from '../components/login/TodoLogout';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const MainPage = () => {
    const navigate = useNavigate();
    const users = useSelector((state: RootState) => state.user);

    if (!users.isLogined) {
        navigate('/');
    }
    return (
        <TodoTemplate>
            <TodoLogout />
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    );
};

export default MainPage;
