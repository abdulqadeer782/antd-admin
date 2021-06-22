import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import moduleSlice from './Reducers/moduleSlice'


export const store = configureStore({
    reducer:{
        moduleSlice,
    },
    middleware: [...getDefaultMiddleware()]
})
