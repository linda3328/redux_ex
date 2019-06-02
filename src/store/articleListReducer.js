import { createAction, handleActions } from 'redux-actions';
import * as ArticleServiceAPI from '../infra/api/ArticleServiceAPI'
//ArticleServiceAPI.getArticleListAPI 
import * as ActionTypes from './actionTypes'
//*as ActionTypes 는 불로오는 경로를 정의함 사용할때는ActionTypes. 추가하고 []중괄호로 바꿈

import { pender } from 'redux-pender';
// const getArticleListRequset = createAction(ActionTypes.GET_ARTICLE_LIST_REQUSET);
// const getArticleListSuccess = createAction(ActionTypes.GET_ARTICLE_LIST_SUCCESS);
// const getArticleListFailed = createAction(ActionTypes.GET_ARTICLE_LIST_FAILED, (error) => {
//     return {
//         error: error

//     };
// });

//리덕스 팬더를 하면 이것만 하면됨

//타입을 적고 , 리턴하는 프로마이즈를 주면됨 프로마이즈는getArticleListAPI
export const getArticleList = createAction(ActionTypes.GET_ARTICLE_LIST, ArticleServiceAPI.getArticleListAPI);
//'../infra/api/ArticleServiceAPI' 로 아래 함수 옮김
// export function getArticleListAPI() {
//     return axios.get('https://us-central1-react-board-67039.cloudfunctions.net/articles')
//         .then((response) => {
//             return response.data;
//         })



// }

// export function getArticleListAPI() {
//     return (dispatch) => {
//         dispatch(getArticleListRequset())
//         axios.get('https://us-central1-react-board-67039.cloudfunctions.net/articles')
//             .then((response) => {
//                 return response.data
//             }).then((data) => {
//                 dispatch(getArticleListSuccess({ data: data }))
//             }).catch((error) => {
//                 console.log(error)
//                 dispatch(getArticleListFailed(new Error('get Article List Failed')))
//             })

//     }

// }


export const deleteArticleList = createAction(ActionTypes.DELETE_ARTICLE_LIST, ArticleServiceAPI.deleteArticleListAPI);


// export function deleteArticleListAPI(id) {
//     return Promise.resolve('delete')
//         .then(() => {
//             return id
//         })



// }


// const deleteArticleListRequset = createAction(ActionTypes.DELETE_ARTICLE_LIST_REQUSET);
// const deleteArticleListSuccess = createAction(ActionTypes.DELETE_ARTICLE_LIST_SUCCESS);
// const deleteArticleListFailed = createAction(ActionTypes.DELETE_ARTICLE_LIST_FAILED);
// export function deleteArticle(id) {
//     return (dispatch) => {
//         dispatch(deleteArticleListRequset())
//         Promise.resolve('delete')
//             .then((result) => {
//                 dispatch(deleteArticleListSuccess({ deleteId: id }))
//             }).catch((error) => {
//                 console.log(error)
//                 dispatch(deleteArticleListFailed({ error: new Error('Delete Article List Failed') }))
//             })

//     }
// }

const initialState = {
    // isLoading: false,
    // isSuccess: false,
    // isFailed: false,
    list: [],
    error: null,
}

export default handleActions({
    // [ActionTypes.GET_ARTICLE_LIST_REQUSET]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: true,
    //         isSuccess: false,
    //         isFailed: false,
    //     })
    // },
    // [ActionTypes.GET_ARTICLE_LIST_SUCCESS]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isSuccess: true,
    //         isFailed: false,
    //         list: [...payload.data],
    //     })

    // },
    // [ActionTypes.GET_ARTICLE_LIST_FAILED]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isSuccess: false,
    //         isFailed: true,
    //         error: payload.error
    //     })
    // },

    //3가지 타입을 안적어도되고 펜딩은 변화가 없다면 생략해도됨
    //
    ...pender({
        type: ActionTypes.GET_ARTICLE_LIST,
        // onPending: (state, { payload }) => {
        //     return state;
        // },
        onSuccess: (state, { payload }) => {
            return Object.assign({}, state, {
                list: payload,

            })
        },
        onFailure: (state, { payload }) => {
            return Object.assign({}, state, {
                error: payload,

            })
        }
    }),

    ...pender({
        type: ActionTypes.DELETE_ARTICLE_LIST,
        // onPending: (state, { payload }) => {
        //     return state;
        // },
        // onSuccess: (state, { payload }) => {
        //     return Object.assign({}, state, {
        //         list: payload,

        //     })
        // },
        onFailure: (state, { payload }) => {
            return Object.assign({}, state, {
                error: payload,

            })
        }
    }),


    // [ActionTypes.DELETE_ARTICLE_LIST_REQUSET]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: true,
    //         isSuccess: false,
    //         isFailed: false,
    //     })
    // },
    // [ActionTypes.DELETE_ARTICLE_LIST_SUCCESS]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isSuccess: true,
    //         isFailed: false,
    //         list: [...payload.data],
    //     })

    // },
    // [ActionTypes.DELETE_ARTICLE_LIST_FAILED]: (state, { payload }) => {
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isSuccess: false,
    //         isFailed: true,
    //         error: payload.error
    //     })
    // },

}, initialState)