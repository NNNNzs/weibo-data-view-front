import React from 'react';


export default class MyIframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null
        }
    }
    componentDidMount() {
        var iwin = document.getElementById('myiframe').contentWindow;
        var doc = iwin.document;
        let height = 100;
        // setInterval(() => {
        //     height += 1
        //     iwin.scroll(0, doc.body.scrollHeight + height);
        // }, 10)
    }
    render() {
        return (
            <iframe id="myiframe" style={{ width: '100%', height: '100%' }} scrolling="true" name={this.props.keyword} src={`https://m.weibo.cn/search?containerid=100103type%3D1%26q%3D${this.props.keyword}`}></iframe>
        )
    }
}