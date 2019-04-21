import { FETCH_POSTS, ITEMS_LOADING } from "../actions/Types";

const initialState = {
  items: [],
  tags: ["hello"],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log('reducer')
      return {
        ...state,
        items: action.payload.results,
        tags: ["hello"]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  } 
}

