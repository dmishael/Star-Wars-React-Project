import { FETCH_POSTS } from "../actions/Types";

const initialState = {
  items: [],
  tags: ["hello"]
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

    default:
      return state;
  } 
}
