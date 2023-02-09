import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:null,
    token: null,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state,action) {
            state.user = action.payload.others
            state.token = action.payload.tolen
        },
        register(state,action) {
            state.user = action.payload.others
            state.token = action.payload.tolen
        },
        logout(state,action) {
            state.user = null
            state.token = null
            localStorage.clear()
        },
    }
})


export const {login, register, logout} = authSlice.actions
export default authSlice.reducer