import * as types from "./actionTypes";

const initialState = { members: [], error: null, selectList: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS: {
      return {
        ...state,
        members: action.payload.members,
        selectList: action.payload.list,
        error: null,
      };
    }
    case types.FETCH_FAILURE: 
    case types.ADD_FAILURE: 
    case types.UPDATE_FAILURE: 
    case types.DELETE_FAILURE: {
      return { ...state, error: action.error };
    }
    default: {
      return state;
    }
  }
}
