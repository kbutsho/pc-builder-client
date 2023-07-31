import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
;
const initialState = {
    components: [],
};

const componentSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        addToComponents: (state, action) => {
            const componentToAdd = { ...action.payload };
            state.components.push(componentToAdd);
            toast.success(`${action.payload.data.category} added!`);
        },
        removeFromComponents: (state, action) => {
            state.components = state.components.filter(
                (component) => component.data.category !== action.payload.data.category
            );
            toast.success(`${action.payload.data.category} removed!`);
        },
        removeAll: (state, action) => {
            state.components = [];
            toast.success("build complete!");
        }
    }
})

export const { addToComponents, removeFromComponents, removeAll } = componentSlice.actions;
export default componentSlice.reducer;