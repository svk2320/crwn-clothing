import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../services/reducer/reducer.services';

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);