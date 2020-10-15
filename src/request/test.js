import axios from 'axios';

export default function () {
    axios.get({
        url: 'https://egg.nnnnzs.cn/getWeibo',
        method: 'get'
    }).then(res => {
        resolve(res.data)
    })
}
