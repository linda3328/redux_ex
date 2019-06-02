import React, { Component } from 'react';
import { connect } from 'react-redux';
//리듀서를 바인드해줘서 아래 articleListActions주소를 추가
import { bindActionCreators } from 'redux';
// import { getArticleList, deleteArticle } from './store/articleListReducer';
import * as articleListActions from './store/articleListReducer';
import * as ActionTypes from './store/actionTypes';








class App extends Component {

  //디스패치 함수를 호출했음 클릭하면 디스패치된 getArticleList 액션을 불러옴
  //props 뒤에 articleListActions 주소를 추가
  onSend = () => {
    this.props.articleListActions.getArticleList();
  }

  render() {

    //스테이트값을 불러와서 프롭스에 담음
    const { isLoading, isSuccess, isFailed, list, error } = this.props;
    return (

      <div>
        <button onClick={this.onSend}>send</button>
        <h1>
          {`isLoading:${isLoading}`}

        </h1>
        <h1>
          {`isSuccess:${isSuccess}`}

        </h1>
        <h1>
          {`isFailed:${isFailed}`}

        </h1>
        {/* 문자열로 바꿔서 에러가 안남 */}
        <h1>
          {`list:${JSON.stringify(list)}`}
        </h1>
        <h1>
          {`error:${JSON.stringify(error)}`}

        </h1>
      </div >
    );
  }

}

//스토어에서 상태값을 불러와서 재정의함
const mapStateToProps = (state) => {
  return {
    // isLoading: state.articleList.isLoading,
    // isSuccess: state.articleList.isSuccess,
    // isFailed: state.articleList.isFailed,
    // list: state.articleList.list,
    // error: state.articleList.error,

    isLoading: state.pender.pending[ActionTypes.GET_ARTICLE_LIST],
    isSuccess: state.pender.success[ActionTypes.GET_ARTICLE_LIST],
    isFailed: state.pender.failure[ActionTypes.GET_ARTICLE_LIST],
    list: state.articleList.list,
    error: state.articleList.error,
  }
}

//getArticleList를 스토어에서 임포트하고
//함수를 디스패치 함수에 넣어서 살향사캄
const mapDispatchToProps = (dispatch) => {
  return {
    // getArticleList: () => dispatch(articleListActions.getArticleList()),
    // deleteArticle: (id) => dispatch(articleListActions.deleteArticle(id)),
    //일일히 적지 않고 액션을 합친후 바인드에 정의함
    articleListActions: bindActionCreators(articleListActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
