import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TasksState{
    value: string[]
}

const initialState: TasksState = {
    value: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    }
})

export const  { addTask}  = taskSlice.actions
export default taskSlice.reducer