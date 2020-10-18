import React from 'react';
// import { Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'
import { Line } from '@antv/g2plot';
import moment from 'moment'

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
                data = data.map(e => {
                    return {
                        num: e.num,
                        dateTime: moment(e.time).format('HH:mm:ss')
                    }
                })
                if (this.line) {
                    this.line.changeData(data)
                    return true
                }
                const line = new Line(this.dom, {
                    data,
                    padding: '0',
                    xField: 'dateTime',
                    yField: 'num',
                    theme: 'dark',
                    title: keyword,
                    xAxis: {
                        tickCount: 10,
                    },
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
