import { fetchCollectionsSuccess, fecthCollectionsFailure } from './shop.actions'
import { takeLatest, call, put, all } from 'redux-saga/effects';
//takeEvery create a non-blocking processing in generator function
//takeLatest take the lastest saga and invoke
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('itemCollections');
        const snapshot = yield collectionRef.get();
        //store .then(snapshot=>snapshot) snapshot to yield and assign to snapshot
        //more like await
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
        //put like dispatch it's saga way to create action
    } catch (error) {
        yield put(fecthCollectionsFailure(error.message))
    }
}



export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START
        , fetchCollectionsAsync)
    //the first argument string is the action for listener the trigger,second is the
    //follow function we want to invoke
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}
