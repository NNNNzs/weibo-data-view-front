import React from 'react';
import { WordCloud } from '@antv/g2plot';

export default class MyWordCloud extends React.Component {
    constructor(props) {
        super(props)
        this.myDom = null;
        this.state = {
            list: []
        }
        this.timer = null
    }
    getRandomTitle() {
        this.setKeyword()
        setInterval(() => {
            this.setKeyword()
        }, 1000 *60)
    }
    setKeyword() {
        let keyword = this.state.list.shift();
        this.props.onOnchange(keyword)
    }
    componentDidMount() {
        fetch('/weibo/getCurrentTop')
            .then(res => res.json())
            .then(list => {
                list = list.filter(e => e.num > 0)

                const container = this.myDom;
                this.setState({
                    list: list.map(e => e.title)
                })
                this.getRandomTitle()

                const wordCloud = new WordCloud(container, {
                    data: list,
                    autoFit: true,
                    wordField: 'title',
                    weightField: 'num',
                    color: '#6262ff',
                    theme: 'dark',
                    wordStyle: {
                        fontFamily: 'Verdana',
                        fontSize: [17, 30],
                    },
                    // 设置交互类型
                    interactions: [{ type: 'element-active' }],
                    state: {
                        active: {
                            // 这里可以设置 active 时的样式
                            style: {
                                lineWidth: 3,
                            },
                        },
                    },
                });

                wordCloud.render();
            })
    }
    render() {
        return <div style={{ width: '100%', height: '100%' }} ref={ref => { this.myDom = ref }}></div>

    }
}