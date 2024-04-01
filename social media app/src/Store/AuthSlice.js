import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId:null,
    editId:null
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login:(state,action)=>{
            state.userId=action.payload
        },
        logout:(state)=>{
           state.userId=null
        },
        edit:(state,action)=>{
            state.editId=action.payload
        },
        editclean:(state)=>{
             state.editId=null
        }
    }
})

export const {login,logout,edit,editclean} = AuthSlice.actions

export default AuthSlice.reducer