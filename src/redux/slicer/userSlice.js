import { createSlice, current } from "@reduxjs/toolkit";
import uuid from "../../util/uuid";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: [
            {id:uuid(), userName: '', email:'',password:'', token: '', role: 'user'},

        ],
        loading : true
    },
    reducers:{
        getAllUsers: (state, action) => {
            state.value = action.payload
            state.loading = false
        },
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        addToken: (state, action) => {
            const user = state.value.find(user => user.id == action.payload.id) 
            user.token = action.payload.token
            
            state.value = state.value.filter(u => u.id != user.id)
            state.value = [...state.value, user]
        },
        removeToken : (state , action) => {

            const user = state.value.find(user => user.id == action.payload.id) 
            user.token = ""
            
            state.value = state.value.filter(u => u.id != user.id)
            state.value = [...state.value, user]
        },
        removeUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload)
        },
        editUser : (state, action) => {
            const user = state.value.find(user => user.id == action.payload.id) 
            user.userName = action.payload.userName
            user.email = action.payload.email

            state.value = state.value.filter(u => u.id != user.id)
            state.value = [...state.value, user]
        }
    }
})

export const {getAllUsers, addUser, addToken, removeToken, removeUser,editUser} = userSlice.actions

export default userSlice.reducer