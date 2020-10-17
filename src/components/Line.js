import React from 'react';
// import { Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'
import { Line } from '@antv/g2plot';
import moment from 'moment'

export default class MyLine extends React.Component {
    constructor(props) {
        super(props);
        this.dom = null
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch('/weibo/getTodayTop?title=周杰伦新歌喜提油管第一')
            .then((res) => res.json())
            .then((data) => {
                data = data.map(e => {
                    return {
                        num: e.num,
                        dateTime: moment(e.time).format('HH:mm:ss')
                    }
                })
                const line = new Line(this.dom, {
                    data,
                    padding: '0',
                    xField: 'dateTime',
                    yField: 'num',
                    theme: 'dark',
                    xAxis: {
                        // type: 'dateTime',
                        tickCount: 5,
                    },
                    
                    // slider: {
                    //     start: 0.1,
                    //     end: 0.5,
                    // },
                });

                line.render();
            });

    }
    render() {
        return (
            <div id="container" style={{ width: '100%', height: '100%' }} ref={ref => { this.dom = ref }}></div>
        )
    }
}
