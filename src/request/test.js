import axios from 'axios';

export default function () {
    axios.get({
        url: 'https://egg.nnnnzs.cn/getWeibo',
        method: 'get'
    }).then(res => {
        resolve(res.data)
    })
}

export const getFrame = ({ keyword, page = 1 }) => {
    axios.get({
        url: 'https://m.weibo.cn/api/container/getIndex',
        data: {
            page_type: 'searchall',
            containerid: `100103type=1`,
            q: keyword,
            page: page
        }
    }).then(res => {

    }).catch(err => {

    })
}
