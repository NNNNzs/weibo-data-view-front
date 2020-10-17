import React from 'react';
import { WordCloud } from '@antv/g2plot';

export default class MyWordCloud extends React.Component {
    constructor(props) {
        super(props)
        this.myDom = null;

        this.state = {
        }
    }
    componentDidMount() {
        fetch('/weibo/getTodayTopCount')
            .then(res => res.json())
            .then(list => {
                const container = this.myDom
                const wordCloud = new WordCloud(container, {
                    data:list,
                    autoFit:true,
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
        return <div style={{width:'100%',height:'100%'}} ref={ref => { this.myDom = ref }}></div>
    }
}