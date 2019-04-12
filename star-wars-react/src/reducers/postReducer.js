import { FETCH_POSTS } from "../actions/Types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log('reducer')
      return {
        ...state,
        items: action.payload.results
      };

    default:
      return state;
  } 
}
