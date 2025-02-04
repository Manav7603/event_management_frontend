import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendAPI = createApi({
    reducerPath: "backendAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://event-management-backend-mauve.vercel.app"
    }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getParticipants: builder.query({ query: () => "participants" }),
        getEvents: builder.query({ query: () => "events" }),
        createEvent: builder.mutation({
            query: (newEvent) => ({
                url: "event",
                method: "POST",
                body: newEvent
            })
        })
    })
})

export const { useGetParticipantsQuery, useGetEventsQuery, useCreateEventMutation } = backendAPI;
