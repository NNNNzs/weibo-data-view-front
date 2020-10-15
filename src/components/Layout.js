import React from 'react';
import { BorderBox3, Loading, ScrollRankingBoard } from '@jiaminghi/data-view-react'
export default class Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                data: [],
                rowNum:15
            },
        }
    }
    getData() {
        fetch('https://egg.nnnnzs.cn/getWeibo')
            .then(res => res.json())
            .then(list => {
                const rankData = list.map(e => {
                    return {
                        name: e.title,
                        value: e.num
                    }
                }).filter(e => e.value > 0)
                let config = this.state.config;
                config.data = rankData;
                this.setState({ config })
            })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        const config1 = this.state.config
        return (
            <BorderBox3
                color={['origin', 'white']}
                backgroundColor='black'
            >
                {
                    config1.data.length === 0 ?
                        <Loading /> :
                        <ScrollRankingBoard style={{ width: '500px',marginLeft:'30px' }} config={this.state.config} />
                }

            </BorderBox3>
        )
    }
}
