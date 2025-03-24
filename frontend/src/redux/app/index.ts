import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/AuthSlice";
import blogReducer from "../slice/BlogSlice"


const loadState = () => {
    try {
        const savedState = localStorage.getItem("reduxState");
        return savedState ? JSON.parse(savedState) : undefined;
    } catch (error) {
        console.error("Failed to load state", error);
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state: { auth: { user: string | null; token: string } }) => {
    try {
        localStorage.setItem(
            "reduxState",
            JSON.stringify({ auth: { user: state.auth.user, token: state.auth.token } })
        );
    } catch (error) {
        console.error("Failed to save state", error);
    }
};

const store = configureStore({
    reducer: {
        // @ts-ignore
        auth: authReducer,
        blog: blogReducer
    },
    preloadedState: loadState(),
});

// Save state on every change
store.subscribe(() => saveState(store.getState()));

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
