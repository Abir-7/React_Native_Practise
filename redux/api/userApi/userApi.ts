import baseApi from "../baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetAllUserQuery } = useApi;
