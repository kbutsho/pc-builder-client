import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./componentSlice";

// const preloadedState = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("components")) : [];

const store = configureStore({
    reducer: {
        components: componentReducer,
    },
    // preloadedState,
});

// store.subscribe(() => {
//     const state = store.getState();
//     localStorage.setItem("components", JSON.stringify(state));
// });
export default store;
