import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/tasksSlices'
export const store = configureStore({
    reducer:{
        tasks: taskReducer
    }
})


export type RootState = ReturnType<typeof store.getState>