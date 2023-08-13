import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

export const apiSliceUrl = {
    public_info : `public_info`,
    products : `products`,
}
export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getConfig: builder.query({
            query: (arg = apiSliceUrl.public_info) => apiSliceUrl.public_info,
        }),
        getProducts: builder.query({
            query: (arg = apiSliceUrl.products) => apiSliceUrl.products,
        }),

    })
});



export const {  useGetConfigQuery  } = apiSlice;
export const { getConfig } = apiSlice.endpoints;