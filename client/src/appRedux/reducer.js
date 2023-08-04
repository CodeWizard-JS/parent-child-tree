import * as types from "./actionTypes";

const initialState = { members: [], error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS: {
      return { ...state, members: action.payload, error: null };
    }
    case types.FETCH_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.ADD_SUCCESS: {
      return { ...state, members: [...state.members, action.payload] };
    }
    case types.ADD_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.UPDATE_SUCCESS:
    case types.UPDATE_FAILURE: {
      return { ...state, error: action.error };
    }
    case types.DELETE_SUCCESS:
    case types.DELETE_FAILURE: {
      return { ...state, error: action.error };
    }
    default: {
      return state;
    }
  }
}
