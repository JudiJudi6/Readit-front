import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postArticle: builder.mutation({
			query: ({ formData }) => ({
				url: `/articles/`,
				method: 'POST',
				body: formData,
			}),
		}),
		buyArticle: builder.mutation({
			query: ({ article_id }) => ({
				url: `/articles/buy/${article_id}`,
				method: 'POST',
			}),
		}),
		changeArticleFavorites: builder.mutation({
			query: ({ article_id }) => ({
				url: `/articles/wish-list/change/${article_id}`,
				method: 'POST',
			}),
		}),
		getArticleDetailsById: builder.query({
			query: ({ article_id }) => ({
				url: `/articles/detail/id/${article_id}`,
				method: 'GET',
			}),
		}),
		makeOpinion: builder.mutation({
			query: ({ article_id, rating, content }) => ({
				url: `/articles/comment/${article_id}`,
				method: 'POST',
				body: {
					rating,
					content,
				},
			}),
		}),
		checkIsBought: builder.query({
			query: ({ article_id }) => ({
				url: `/articles/is-bought/${article_id}`,
				method: 'GET',
			}),
		}),
		checkIsWished: builder.query({
			query: ({ article_id }) => ({
				url: `/articles/wish-list/is/${article_id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	usePostArticleMutation,
	useBuyArticleMutation,
	useChangeArticleFavoritesMutation,
	useGetArticleDetailsByIdQuery,
	useMakeOpinionMutation,
	useCheckIsBoughtQuery,
	useCheckIsWishedQuery,
} = authApiSlice;
