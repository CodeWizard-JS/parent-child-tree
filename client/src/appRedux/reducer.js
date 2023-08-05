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
    case types.FETCH_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.ADD_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.UPDATE_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.DELETE_FAILURE: {
      return { ...state, error: action.error };
    }
    default: {
      return state;
    }
  }
}
