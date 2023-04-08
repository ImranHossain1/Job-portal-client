import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/job",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    apply: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: "/apply",
        body: data,
      }),
    }),
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["Jobs"],
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["Jobs"],
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobsQuery,
  useJobByIdQuery,
  useApplyMutation,
} = jobApi;
