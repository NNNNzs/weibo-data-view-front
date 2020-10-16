import React from 'react';
import { Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'

export default class Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                data: [],
                rowNum: 10
            }
        }
        this.getData()
    }
    getData() {
        fetch('/api/getWeibo')
            .then(res => res.json())
            .then(list => {
                const rankData = list.map(e => {
                    return {
                        name: e.title,
                        value: e.num
                    }
                })
                let config = this.state.config;
                config.data = rankData;
                this.setState({ config })
            })
    }
    render() {
        return (
            <>
                {
                    this.state.config.data.length === 0 ?
                        <Loading /> :
                        <ScrollRankingBoard style={{ width: '500px', marginLeft: '30px' }} config={this.state.config} />
                }
            </>)
    }
}