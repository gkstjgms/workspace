import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';

const MainPage = () => {
    return (
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    );
}

export default MainPage;
