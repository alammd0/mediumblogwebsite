import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: string | null;
    loading: boolean;
    token: string;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    token: localStorage.getItem("token") || "",
    loading: false,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string | null>) {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
    },
});

export const { setUser, setLoading, setToken } = authSlice.actions;
export default authSlice.reducer;
