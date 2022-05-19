import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RiLogoutCircleLine } from 'react-icons/ri';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

import { userLogouted } from '../../redux/features/loginSlice';

const CircleButton = styled.button`
    background: #ffffff;

    z-index: 6;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: block;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, -1480%);
    color: white;
    color: #3866d9;
    &:hover {
        color: #6382e6;
    }
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
`;

function TodoLogout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state);

    const onLogout = () => {
        console.log("logout", users.user.userInfo);
        dispatch(userLogouted(users));
        navigate('/');
    };

    return (
        <>
            <CircleButton onClick={onLogout}>
                <RiLogoutCircleLine />
            </CircleButton>
        </>
    );
}

export default TodoLogout;
