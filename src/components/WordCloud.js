import React from 'react';
import Js2WordCloud from 'js2wordcloud'

export default class WordCloud extends React.Component {
    constructor(props) {
        super(props)
        this.myDom = null;

        this.state = {
            domStyle: {
                width: '516px',
                height: '440px'
            }
        }
    }
    componentDidMount() {
        var wc = new Js2WordCloud(this.myDom);

        wc.showLoading([{
            backgroundColor: '#eee',
            text: '正在加载...',
            effect: 'spin'
        }]);
        fetch('/api/getWeibo')
            .then(res => res.json())
            .then(list => {
                const rankData = list.map(e => {
                    return [e.title, e.num]
                });
                wc.setOption({
                    // imageShape: 'https://static.nnnnzs.cn/wallhaven/1996.png',
                    tooltip: {
                        show: true
                    },
                    list: rankData,
                    color: 'rgb(62,150,165)',
                    backgroundColor: '#000'
                })
            })
    }
    render() {
        return <div style={this.state.domStyle} ref={ref => { this.myDom = ref }}></div>
    }
}