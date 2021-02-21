import {FETCH_POSTS, SHOW_LOADER} from "../types";

//Создаём условия для ACTION TYPES
const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_POSTS]: (state, {payload}) => ({...state, posts: payload, loading: false}),
    DEFAULT: state => state,
};

//Создаём Reducer
export const articleReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};