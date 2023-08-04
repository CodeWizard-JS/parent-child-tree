import * as types from "./actionTypes";

export const getAllMembersAction = () => ({ type: types.FETCH_REQUEST });
export const addMemberAction = (data) => ({
  type: types.ADD_REQUEST,
  payload: data,
});
export const updateMemberAction = (data) => ({
  type: types.UPDATE_REQUEST,
  payload: data,
});
export const deleteMemberAction = (data) => ({
  type: types.DELETE_REQUEST,
  payload: data,
});
