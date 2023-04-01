import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {},
    reducers: {
        storeData: (state, action) => {
            state.user = action.payload
           


        }
    }
})

export const { storeData } = userDataSlice.actions

export default userDataSlice.reducer