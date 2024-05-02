import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId:null,
    editId:null,
    status:false
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login:(state,action)=>{
            state.status=true,
            state.userId=action.payload
        },
        logout:(state)=>{
            state.status=false,
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