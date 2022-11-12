// main file to make API calls

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '217896d594msh5665c9f95fd52dep156d04jsn2dcbe40d838a',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '217896d594msh5665c9f95fd52dep156d04jsn2dcbe40d838a'
      );
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world'
    })
  })
});

export const { useGetTopChartsQuery } = shazamCoreApi;
