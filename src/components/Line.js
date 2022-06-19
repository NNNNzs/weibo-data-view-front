import React from 'react';
// import { Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'
import { Line, G2 } from '@antv/g2plot';
import moment from 'moment'
let maxNum = 0, minNum = 0;


export default class MyLine extends React.Component {
    constructor(props) {
        super(props);
        this.dom = null
        this.line = null
        this.state = {
            keyword: ''
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.keyword && this.props.keyword !== this.state.keyword) {
            const { keyword } = this.props;
            this.setState({ keyword });
            this.getData(keyword)
        }
    }
    getData(keyword) {
        fetch(`/weibo/getTopByTitle?title=${keyword}`)
            .then((res) => res.json())
            .then((data) => {
                const yearSet = new Set()
                const daySet = new Set();
                data = data.map(e => {
                    yearSet.add(moment(e.date).year())
                    daySet.add(moment(e.date).day());
                    if (e.num >= maxNum) {
                        maxNum = e.num
                    }
                    if (e.num <= minNum) {
                        minNum = e.num
                    }
                    return {
                        num: e.num,
                        tip: moment(e.time).format('YYYY-MM-DD HH:mm:ss'),
                        dateTime: moment(e.time).format('HH:mm:ss')
                    }
                })

                const max = 10
                if (this.line) {
                    this.line.destroy()
                    // this.line.changeData(data)
                    // this.line.update({
                    //     xAxis: { text: keyword },
                    //     slider: data.length > max ? {} : undefined
                    // })
                    // return true
                }
                const line = new Line(this.dom, {
                    data,
                    padding: '0',
                    xField: 'dateTime',
                    yField: 'num',
                    theme: 'dark',
                    tooltip: {
                        fields: ['num', 'tip']
                    },
                    title: { text: keyword },
                    xAxis: {
                        title: { text: keyword },
                        tickCount: 10,
                    },
                    // slider: {}
                    slider: data.length > max ? {} : undefined
                });
                this.line = line;
                line.render();
            });

    }
    render() {
        return (
            <div id="container" style={{ width: '100%', height: '100%' }} ref={ref => { this.dom = ref }}></div>
        )
    }
}
