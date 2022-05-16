import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';

import { RouteComponentProps } from 'react-router-dom';

const MainPage = (): JSX.Element => {
    return (
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    );
}

export default MainPage;
