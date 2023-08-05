import { takeEvery, call, put, all, fork } from "redux-saga/effects";
import * as effects from "./effects";
import * as types from "./actionTypes";

function* getAllMembers() {
  try {
    const members = yield call(effects.getAllMembersAPIEffect);
    yield put({ type: types.FETCH_SUCCESS, payload: members });
  } catch (err) {
    yield put({ type: types.FETCH_FAILURE, error: err });
  }
}

function* addMember(action) {
  try {
    yield call(effects.addMemberAPIEffect, action.payload);
    const members = yield call(effects.getAllMembersAPIEffect);
    yield put({ type: types.FETCH_SUCCESS, payload: members });
  } catch (err) {
    yield put({ type: types.ADD_FAILURE, error: err });
  }
}

function* updateMember(action) {
  try {
    yield call(effects.updateMemberAPIEffect, action.payload);
    const members = yield call(effects.getAllMembersAPIEffect);
    yield put({ type: types.FETCH_SUCCESS, payload: members });
  } catch (err) {
    yield put({ type: types.UPDATE_FAILURE, error: err });
  }
}

function* removeMember(action) {
  try {
    yield call(effects.deleteMemberAPIEffect, action.payload);
    const members = yield call(effects.getAllMembersAPIEffect);
    yield put({ type: types.FETCH_SUCCESS, payload: members });
  } catch (err) {
    yield put({ type: types.DELETE_FAILURE, error: err });
  }
}

export function* getAllMembersSaga() {
  yield takeEvery(types.FETCH_REQUEST, getAllMembers);
}

export function* addMemberSaga() {
  yield takeEvery(types.ADD_REQUEST, addMember);
}

export function* updateMemberSaga() {
  yield takeEvery(types.UPDATE_REQUEST, updateMember);
}

export function* deleteMemberSaga() {
  yield takeEvery(types.DELETE_REQUEST, removeMember);
}

export default function* rootSaga() {
  yield all([
    fork(getAllMembersSaga),
    fork(addMemberSaga),
    fork(updateMemberSaga),
    fork(deleteMemberSaga),
  ]);
}
