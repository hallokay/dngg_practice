import {
  createSelector,
  createEntityAdapter, //정규화
} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getManagers: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetManagersQuery } = extendedApiSlice;