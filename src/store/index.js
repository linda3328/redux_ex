
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articleListReducer from './articleListReducer'


//1. store 를 생성하는 함수를 정의
//스토어()함수에는 1번째로 리듀서가 들어가고 2번때는 미드웨어가 들어감
//외부에서 분리해서 간단하게 쓰기 위해서 (불러오는 이름명도 재정의해서 더 짧고 간결하게 적을수있음)
export function configureStore() {
    //사용할 미들웨어를 생성하고 정의하고 추가될 미들웨어는 괄로안에, 넣고 추가하면됨()
    const middleware = applyMiddleware(thunk);
    //컴포즈로 같이 쓸수 없는 미들웨어와 데브툴을 합쳐서 스토어 리듀서 뒤에 미들웨어 자리에 컴포즈를 넣으면된다
    const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) :
        middleware

    return createStore(combineReducers({
        articleList: articleListReducer
    }
    ), composed)

    // ), applyMiddleware(thunk))
}