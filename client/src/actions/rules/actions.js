import t from './types';

export const toggleLanguage = language => dispatch => {
  dispatch({ type: t.TOGGLE_RULES, payload: language });
};
