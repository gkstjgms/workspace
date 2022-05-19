import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import TodoLogout from '../components/login/TodoLogout';

const MainPage = () => {
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
