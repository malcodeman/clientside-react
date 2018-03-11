import { call, put, takeLatest, all } from "redux-saga/effects";

import { REQUEST_BRANDS } from "../actions";
import { RECIVE_BRANDS } from "../actions";

import { getBrands } from "./api";

export function* fetchBrands() {
  const data = yield call(getBrands);
  yield put({ type: RECIVE_BRANDS, payload: data.data });
}

export function* watchFetchBrands() {
  yield takeLatest(REQUEST_BRANDS, fetchBrands);
}

export default function* rootSaga() {
  yield all([watchFetchBrands()]);
}
