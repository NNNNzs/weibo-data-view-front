import React from 'react';
import { Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'

export default class Rank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                data: [],
                rowNum: 10,
                waitTime:1000
            }
        }
    }
    componentDidMount(){
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
                        <ScrollRankingBoard config={this.state.config} />
                }
            </>)
    }
}