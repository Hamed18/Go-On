import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),

    geSingletUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),

    updateProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),

    updateUserActiveStatus: builder.mutation({
      query: (id) => ({
        url: `/user/activation/${id}`,
        method: "PATCH",
      }),
    }),

    updatePassword: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/update-password/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserActiveStatusMutation,
  useGeSingletUserQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = userApi;
