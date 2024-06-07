import { createSlice } from "@reduxjs/toolkit"

const useSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUsers: null,
    },

    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
    }
})

export const { setAuthUser, setOtherUsers } = useSlice.actions;
export default useSlice.reducer;