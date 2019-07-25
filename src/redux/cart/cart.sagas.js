import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';


export function* SignOutClearCart() {
    yield put(clearCart())
}

export function* onSignOutClearCart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, SignOutClearCart)
}

export function* cartSagas() {
    yield all([call(onSignOutClearCart)])
}