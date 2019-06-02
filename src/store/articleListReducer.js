import { createAction, handleActions } from 'redux-actions';
import * as ActionTypes from './actionTypes'
//*as ActionTypes 는 불로오는 경로를 정의함 사용할때는ActionTypes. 추가하고 []중괄호로 바꿈
import axios from 'axios';

const getArticleListRequset = createAction(ActionTypes.GET_ARTICLE_LIST_REQUSET);
const getArticleListSuccess = createAction(ActionTypes.GET_ARTICLE_LIST_SUCCESS);
const getArticleListFailed = createAction(ActionTypes.GET_ARTICLE_LIST_FAILED, (error) => {
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


const deleteArticleListRequset = createAction(ActionTypes.DELETE_ARTICLE_LIST_REQUSET);
const deleteArticleListSuccess = createAction(ActionTypes.DELETE_ARTICLE_LIST_SUCCESS);
const deleteArticleListFailed = createAction(ActionTypes.DELETE_ARTICLE_LIST_FAILED);
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
    [ActionTypes.GET_ARTICLE_LIST_REQUSET]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
        })
    },
    [ActionTypes.GET_ARTICLE_LIST_SUCCESS]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            list: [...payload.data],
        })

    },
    [ActionTypes.GET_ARTICLE_LIST_FAILED]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
            error: payload.error
        })
    },

    [ActionTypes.DELETE_ARTICLE_LIST_REQUSET]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: true,
            isSuccess: false,
            isFailed: false,
        })
    },
    [ActionTypes.DELETE_ARTICLE_LIST_SUCCESS]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            list: [...payload.data],
        })

    },
    [ActionTypes.DELETE_ARTICLE_LIST_FAILED]: (state, { payload }) => {
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: false,
            isFailed: true,
            error: payload.error
        })
    },

}, initialState)