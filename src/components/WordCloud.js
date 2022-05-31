import React from 'react';
import { WordCloud } from '@antv/g2plot';

export const reflash_interval = 1000 * 60 * 5;
export const changeTitle_interval = 1000 * 60;

export default class MyWordCloud extends React.Component {
    myDom = null;
    state = {
        list: []
    };
    hasCreate = false;
    timer = null;
    wordCloud = null;
    getRandomTitle() {
        this.setKeyword()
        setInterval(() => {
            this.setKeyword()
        }, changeTitle_interval)
    }
    setKeyword() {
        let keyword = this.state.list.shift();
        this.props.onOnchange(keyword)
    }
    createChat(){

    }
    getData() {
        fetch('/weibo/getCurrentTop')
            .then(res => res.json())
            .then(list => {
                list = list.filter(e => e.num > 0)

                const container = this.myDom;
                this.setState({
                    list: list.map(e => e.title)
                })
                this.getRandomTitle()
                const options = {
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
                    interactions: [
                        { type: 'element-active' },

                    ],
                    state: {
                        active: {
                            // 这里可以设置 active 时的样式
                            style: {
                                lineWidth: 3,
                            },
                        },
                    },
                }
                const wordCloud = new WordCloud(container, options);

                if (!this.hasCreate) {
                    wordCloud.render();
                    this.hasCreate = true;
                } else {
                    wordCloud.changeData(list)
                    wordCloud.destroy()
                }

            })
    }
    componentDidMount() {
        this.getData()
        setInterval(() => {
            this.getData()
        }, reflash_interval)
    }
    render() {
        return <div onClick={() => { this.getData() }} style={{ width: '100%', height: '100%' }} id="idid" ref={ref => { this.myDom = ref }}></div>

    }
}