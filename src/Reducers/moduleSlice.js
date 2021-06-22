import { createSlice ,createAction } from '@reduxjs/toolkit'

const initialState = []

const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers:{   
    }
})


export default moduleSlice.reducer

export const {increment} = moduleSlice.actions;
