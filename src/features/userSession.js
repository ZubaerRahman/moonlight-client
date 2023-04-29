import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    jwtToken: "",
    isLoggedIn: false,
};

export const userSessionSlice = createSlice({
    name: "userSession",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        login: (state, action) => {
            console.log("value  " + state.value, " PAYLOAD " + action.payload)
            state.value = action.payload;
            console.log("new value", state.value);
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    }
});

export const {login, logout} = userSessionSlice.actions;

export default userSessionSlice.reducer;