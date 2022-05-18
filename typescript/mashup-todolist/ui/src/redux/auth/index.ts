import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLogined: boolean;
    authInfo?: iAuthInfo;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
    isLogined: false,
    status: 'idle',
};

export interface iAuthInfo {
    userid?: string;
    userpw?: string;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogined: (state, action: PayloadAction<iAuthInfo>) => {
            state.isLogined = true;
            state.authInfo = action.payload;
        },
        updateAuth: (state, action: PayloadAction<iAuthInfo>) => {
            state.authInfo = action.payload;
        }
    }
});

export const { authLogined, updateAuth } = authSlice.actions;
export default authSlice.reducer;