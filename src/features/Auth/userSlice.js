import { 
    createEntityAdapter,
    createSelector
} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

export const extendedAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      // 데이터 이름
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addNewUser: builder.mutation({
      query: (initialUser) => ({
        url: "/users",
        method: "POST",
        body: {
          ...initialUser,
          
        },
      }),
    }),
  }),
});