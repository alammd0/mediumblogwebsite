import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
    blog: string | null;
    loading: boolean;
}

const initialState: BlogState = ({
    blog: null,
    loading: false,
})

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlog(state, action: PayloadAction<string>) {
            state.blog = action.payload;
        },

        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
})

export const { setBlog, setLoading } = blogSlice.actions;
export default blogSlice.reducer;