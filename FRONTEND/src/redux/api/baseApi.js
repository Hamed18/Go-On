import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

// Base query
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // Access token from auth state
    const token = getState().auth?.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// Base query with optional refresh token handling
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message);
  }

  // Uncomment and use when server supports refresh token
  /*
  if (result?.error?.status === 401) {
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = api.getState().auth.user;
      api.dispatch(setUser({ user, token: data.data.accessToken }));
      return await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  */

  return result;
};

// Create API
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
