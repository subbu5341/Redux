import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types';
const initialState = {
	articles: []
};
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: [...state.articles, action.payload] };
		case DELETE_ARTICLE:
			return {
				...state,
				articles: [
					...state.articles.slice(0, action['payload'].ID),
					...state.articles.slice(
						action['payload'].ID + 1,
						state.articles.length
					)
				]
			};
		default:
			return state;
	}
};
export default rootReducer;
