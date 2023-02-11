import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
export const store = configureStore({
    reducer: {
        // api를 여기에 등록해줘야함- 아래처럼
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // 이거는 메뉴얼에 그냥 이렇게 쓰라고 나와있음
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})