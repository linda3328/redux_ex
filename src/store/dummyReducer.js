// import { createAction, handleActions } from 'redux-actions';
// //handleActions는 리듀서를 만들어주는것

// import axios from 'axios';
// //타입을 정의하고
// const GET_ARTICLE_LIST_REQUSET = 'GET_ARTICLE_LIST_REQUSET';
// const GET_ARTICLE_LIST_SUCCESS = 'GET_ARTICLE_LIST_SUCCESS';
// const GET_ARTICLE_LIST_FAILED = 'GET_ARTICLE_LIST_FAILED';


// const getArticleListRequset = createAction(GET_ARTICLE_LIST_REQUSET);

// // //함수에 정의한 타입을 넣고 페이로드를 넣고
// // function getArticleListRequset() {
// //     return {
// //         type: GET_ARTICLE_LIST_REQUSET,
// //         payload: null
// //     }
// // }



// //페이로드에 데이터 값을 불러오면 getArticleListSuccess(데이터를넘겨줘야 불러올수있다)
// //1번
// const getArticleListSuccess = createAction(GET_ARTICLE_LIST_SUCCESS);
// // function getArticleListSuccess(data) {
// //     return {
// //         type: GET_ARTICLE_LIST_SUCCESS,
// //         payload: {
// //             data: data
// //         }
// //     }
// // }

// //페이로드에 error 값을 불러오면 getArticleListFailed(error 를넘겨줘야 불러올수있다)
// //2번
// const getArticleListFailed = createAction(GET_ARTICLE_LIST_FAILED, (error) => {
//     return {
//         error: error

//     };
// });

// // function getArticleListFailed(error) {
// //     return {
// //         type: GET_ARTICLE_LIST_FAILED,
// //         payload: error

// //     }
// // }
// //익스포트 시켜서 액션실행함수를 익스포트함
// //cor
// //createAction을 사용할경우 getArticleListRequset() 함수 안에 내용이() 페이로드에 바로 들어감 처음부처 1번 ({data:data})를 넣던지 *1번 방법이 더 좋은 방법
// // 아닙 위에 2번 createAction을(GET_ARTICLE_LIST_SUCCESS, 페이로드값을 넣으면됨) {error: new Error('get Article List Failed')}
// export function getArticleList() {
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

// //delete 있고
// const DELETE_ARTICLE_LIST_REQUSET = 'DELETE_ARTICLE_LIST_REQUSET';
// const DELETE_ARTICLE_LIST_SUCCESS = 'DELETE_ARTICLE_LIST_SUCCESS';
// const DELETE_ARTICLE_LIST_FAILED = 'DELETE_ARTICLE_LIST_FAILED';

// const deleteArticleListRequset = createAction(DELETE_ARTICLE_LIST_REQUSET);
// // function deleteArticleListRequset() {
// //     return {
// //         type: DELETE_ARTICLE_LIST_REQUSET,
// //         payload: null
// //     }
// // }

// const deleteArticleListSuccess = createAction(DELETE_ARTICLE_LIST_SUCCESS);
// // function deleteArticleListSuccess(deleteId) {
// //     return {
// //         type: DELETE_ARTICLE_LIST_SUCCESS,
// //         payload: {
// //             deleteId: deleteId
// //         }
// //     }
// // }

// const deleteArticleListFailed = createAction(DELETE_ARTICLE_LIST_FAILED);
// // function deleteArticleListFailed(error) {
// //     return {
// //         type: DELETE_ARTICLE_LIST_FAILED,
// //         payload: error
// //     }
// // }

// export function deleteArticle(id) {
//     return (dispatch) => {
//         dispatch(deleteArticleListRequset())
//         Promise.resolve('delete')
//             .then((result) => {
//                 //result ==='delete'
//                 //페이로드에 딜리트아이디 키에:id 값을 넣어줌
//                 dispatch(deleteArticleListSuccess({ deleteId: id }))
//             }).catch((error) => {
//                 console.log(error)
//                 dispatch(deleteArticleListFailed({ error: new Error('Delete Article List Failed') }))
//             })

//     }
// }

// //update 있고

// //

// const initialState = {
//     isLoading: false,
//     isSuccess: false,
//     isFailed: false,
//     list: [],
//     error: null,
// }


// export default handleActions({
//     GET_ARTICLE_LIST_REQUSET: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: true,
//             isSuccess: false,
//             isFailed: false,
//         })
//     },
//     GET_ARTICLE_LIST_SUCCESS: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: false,
//             isSuccess: true,
//             isFailed: false,
//             list: [...payload.data],
//         })

//     },
//     GET_ARTICLE_LIST_FAILED: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: false,
//             isSuccess: false,
//             isFailed: true,
//             error: payload.error
//         })
//     },

//     DELETE_ARTICLE_LIST_REQUSET: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: true,
//             isSuccess: false,
//             isFailed: false,
//         })
//     },
//     DELETE_ARTICLE_LIST_SUCCESS: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: false,
//             isSuccess: true,
//             isFailed: false,
//             list: [...payload.data],
//         })

//     },
//     DELETE_ARTICLE_LIST_FAILED: (state, { payload }) => {
//         return Object.assign({}, state, {
//             isLoading: false,
//             isSuccess: false,
//             isFailed: true,
//             error: payload.error
//         })
//     },

// }, initialState)
// //액션은 위에 함수 타입과 페이로드
// //스테이트에 상태 스테이트 초기화 작성
// // //유효성 검사에 조건을 달아준것
// // export default function getArticleListReducer(state = initialState
// //     // {
// //     //     isLoading: false,
// //     //     isSuccess: false,
// //     //     isFailed: false,
// //     //     list: [],
// //     //     error: null,
// //     // }
// //     , { type, payload }) {



// //     switch (type) {
// //         case GET_ARTICLE_LIST_REQUSET:
// //             return Object.assign({}, state, {
// //                 isLoading: true,
// //                 isSuccess: false,
// //                 isFailed: false,
// //             })
// //         case GET_ARTICLE_LIST_SUCCESS:
// //             return Object.assign({}, state, {
// //                 isLoading: false,
// //                 isSuccess: true,
// //                 isFailed: false,
// //                 list: [...payload.data],
// //             })
// //         case GET_ARTICLE_LIST_FAILED:
// //             return Object.assign({}, state, {
// //                 isLoading: false,
// //                 isSuccess: false,
// //                 isFailed: true,
// //                 error: payload.error
// //             })


// //         case DELETE_ARTICLE_LIST_REQUSET:
// //             return Object.assign({}, state, {
// //                 isLoading: true,
// //                 isSuccess: false,
// //                 isFailed: false,
// //             })
// //         case DELETE_ARTICLE_LIST_SUCCESS:
// //             return Object.assign({}, state, {
// //                 isLoading: false,
// //                 isSuccess: true,
// //                 isFailed: false,
// //             })
// //         case DELETE_ARTICLE_LIST_FAILED:
// //             return Object.assign({}, state, {
// //                 isLoading: false,
// //                 isSuccess: false,
// //                 isFailed: true,
// //                 error: payload.error
// //             })

// //         default:
// //             return state;
// //     }

// // }