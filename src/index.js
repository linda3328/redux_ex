import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from './store/index'


//스토어를 사용하기 위해서는 <Provider>를 인포트 한뒤에 app을 감싸주기만 하면됨.
//스토어 파일에서 컨피규어 함수 불러오고 아래 컨스트에 정의하고 procider 에 스토어를 넣어줌

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
