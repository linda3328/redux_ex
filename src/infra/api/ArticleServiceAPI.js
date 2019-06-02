import axios from 'axios';


export function getArticleListAPI() {
    return axios.get('https://us-central1-react-board-67039.cloudfunctions.net/articles')
        .then((response) => {

            return response.data;
        })



}



export function deleteArticleListAPI(id) {
    return Promise.resolve('delete')
        .then(() => {
            return id
        })



}