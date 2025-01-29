import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action) => {
            state.count += 1; 
        },
    },
});

export const { add } = userSlice.actions;
export default userSlice.reducer;