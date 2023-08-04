import { createSlice, current } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask(state, action){
            action.payload.map((ele, ind)=>{
                state.push(ele);
            })
        }
    }
})

export default TaskSlice.reducer;
export const {addTask} = TaskSlice.actions;