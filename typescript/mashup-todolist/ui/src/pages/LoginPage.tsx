import React from 'react';
import TodoLoginTemplate from '../components/login/TodoLoginTemplate';
import TodoLogin from '../components/login/TodoLogin';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function LoginPage() {
    const navigate = useNavigate();
    const users = useSelector((state: RootState) => state.user);
    if (users.isLogined) {
        navigate('/todo');
    }
    return (
        <TodoLoginTemplate>
            <TodoLogin />
        </TodoLoginTemplate>
    );
}

export default LoginPage;
