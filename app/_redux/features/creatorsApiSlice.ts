import { apiSlice } from "../services/apiSlice";
import { GetUserType, User } from "./authApiSlice";

export interface PaginatonType {
  items: GetUserType[];
  page: number;
  pages: number;
  size: number;
  total: number;
}

const creatorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersTopFollows: builder.mutation<
      PaginatonType,
      { page: number; size: number }
    >({
      query: ({ page, size }) => ({
        url: `/user/followers/top?page=${page}&size=${size}`,
        method: "GET",
      }),
    }),
    getUsersTopArticles: builder.mutation<
      PaginatonType,
      { page: number; size: number }
    >({
      query: ({ page, size }) => ({
        url: `/user/articles/top?page=${page}&size=${size}`,
        method: "GET",
      }),
    }),
    searchForUser: builder.mutation<
      PaginatonType,
      { value?: string; sortBy?: string; page?: string }
    >({
      query: ({ value, sortBy, page }) => ({
        url: `/user/search?value=${value}&sort_order=desc&sort_by=${sortBy}&page=${page}&size=12`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersTopFollowsMutation,
  useGetUsersTopArticlesMutation,
  useSearchForUserMutation,
} = creatorsApiSlice;
