import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types';
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = article => ({
	type: DELETE_ARTICLE,
	payload: article
});
