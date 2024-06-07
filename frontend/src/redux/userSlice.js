import { createSlice } from "@reduxjs/toolkit"

const useSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
    },

    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.setOtherUsers = action.payload;
        }
    }
})

export const { setAuthUser } = useSlice.actions;
export default useSlice.reducer;