import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./slices/TaskSlice";

const store = configureStore({
    reducer: {
        tasks: TaskSlice,
    }
})

export default store;