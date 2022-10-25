import {getProductListRequest} from './axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import Actions from './actions';

function* getProductList () {
    try {
        const getProductListValues = yield call (() => getProductListRequest())
        yield put ({
            type: Actions.PRODUCT_LIST_SUCCESS,
            payload: getProductListValues
        })
    } catch (error) {
        yield put ({
            type: Actions.PRODUCT_LIST_FAILURE,
            message: error.message
        })
    }
}

export default function* handleFunctions() {
    yield takeEvery (Actions.PRODUCT_LIST_REQUEST,getProductList)
}
