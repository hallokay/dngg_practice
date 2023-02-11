import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.CMS_API,
    baseUrl: "https://jsonplaceholder.typicode.com",
    // baseUrl: "https://dev.cms.dngg.kr/api/v1/",
  }),
  tagType: ["Post", "User"],
  endpoints: (builder) => ({}),
});