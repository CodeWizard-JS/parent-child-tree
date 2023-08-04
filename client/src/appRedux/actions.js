import * as types from "./actionTypes";

export const getAllMembersAction = () => ({ type: types.FETCH_REQUEST });

export const addMemberAction = (payload) => ({
  type: types.ADD_REQUEST,
  payload,
});

export const updateMemberAction = (payload) => ({
  type: types.UPDATE_REQUEST,
  payload,
});

export const deleteMemberAction = (payload) => ({
  type: types.DELETE_REQUEST,
  payload,
});
