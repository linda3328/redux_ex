import { createAction, handleActions } from 'redux-actions';

import axios from 'axios';
const GET_ARTICLE_LIST_REQUSET = 'GET_ARTICLE_LIST_REQUSET';
const GET_ARTICLE_LIST_SUCCESS = 'GET_ARTICLE_LIST_SUCCESS';
const GET_ARTICLE_LIST_FAILED = 'GET_ARTICLE_LIST_FAILED';


const getArticleListRequset = createAction(GET_ARTICLE_LIST_REQUSET);
const getArticleListSuccess = createAction(GET_ARTICLE_LIST_SUCCESS);
const getArticleListFailed = createAction(GET_ARTICLE_LIST_FAILED, (error) => {
    return {
        error: error

    };
});
export function getArticleList() {
    return (dispatch) => {
        dispatch(getArticleListRequset())
        axios.get('https://us-central1-react-board-67039.cloudfunctions.net/articles')
            .then((response) => {
                return response.data
            }).then((data) => {
                dispatch(getArticleListSuccess({ data: data }))
            }).catch((error) => {
                console.log(error)
                dispatch(getArticleListFailed(new Error('get Article List Failed')))
            })

    }

}


const DELETE_ARTICLE_LIST_REQUSET = 'DELETE_ARTICLE_LIST_REQUSET';
const DELETE_ARTICLE_LIST_SUCCESS = 'DELETE_ARTICLE_LIST_SUCCESS';
const DELETE_ARTICLE_LIST_FAILED = 'DELETE_ARTICLE_LIST_FAILED';

const deleteArticleListRequset = createAction(DELETE_ARTICLE_LIST_REQUSET);
const deleteArticleListSuccess = createAction(DELETE_ARTICLE_LIST_SUCCESS);
const deleteArticleListFailed = createAction(DELETE_ARTICLE_LIST_FAILED);
export function deleteArticle(id) {
    return (dispatch) => {
        dispatch(deleteArticleListRequset())
        Promise.resolve('delete')
            .then((result) => {
                dispatch(deleteArticleListSuccess({ deleteId: id }))
            }).catch((error) => {
                console.log(error)
                dispatch(deleteArticleListFailed({ error: new Error('Delete Article List Failed') }))
            })

    }
}

const initialState = {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    list: [],
    error: null,
}

export default handleActions({
    GET_ARTICLE_LIST_REQUSET: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
        })
    },
    GET_ARTICLE_LIST_SUCCESS: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            list: [...payload.data],
        })

    },
    GET_ARTICLE_LIST_FAILED: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
            error: payload.error
        })
    },

    DELETE_ARTICLE_LIST_REQUSET: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
        })
    },
    DELETE_ARTICLE_LIST_SUCCESS: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            list: [...payload.data],
        })

    },
    DELETE_ARTICLE_LIST_FAILED: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
            error: payload.error
        })
    },

}, initialState)