import React from 'react';
import { BorderBox3, Decoration5, Decoration8 } from '@jiaminghi/data-view-react'
import '../styles/Layout.less'
import Rank from './Rank'
import WordCloud from './WordCloud'
import Line from './Line'
// import MyIframe from './iframe'
import InfoFlow from './InfoFlow/index.js'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: null
        }
    }
    changeLine(keyword) {
        this.setState({ keyword })
    }
    render() {
        return (
            <div className="layout">
                <div className="header">
                    <Decoration8 className="width30" />
                    <div className="title">
                        <h1>数据大屏幕</h1>
                        <Decoration5 style={{ height: '40px', color: 'white', display: 'block' }}></Decoration5>
                    </div>
                    <Decoration8 reverse={true} className="width30" />
                </div>
                <div className="row1">
                    <div className="width30">
                    </div>
                    <div className="width40">
                        <BorderBox3
                            color={['rgb(62,150,165)', 'rgb(62,150,165)']}
                            backgroundColor='black'
                        >
                            <WordCloud onOnchange={(keyword) => { this.changeLine(keyword) }} />
                        </BorderBox3>
                    </div>
                    <div className="width30">
                        <BorderBox3
                            color={['rgb(62,150,165)', 'rgb(62,150,165)']}
                            backgroundColor='black'
                            className='scroll'
                        >
                            {/* <MyIframe keyword={this.state.keyword} /> */}
                            <InfoFlow keyword={this.state.keyword} />
                        </BorderBox3>
                    </div>
                </div>
                <div className="row2">
                    <div className="width30"></div>
                    <div className="width40">
                        <BorderBox3
                            color={['rgb(62,150,165)', 'rgb(62,150,165)']}
                            backgroundColor='black'
                        >
                            <Line keyword={this.state.keyword} />

                        </BorderBox3>

                    </div>
                    <div className="width30">
                        <BorderBox3
                            color={['rgb(62,150,165)', 'rgb(62,150,165)']}
                            backgroundColor='black'
                        >
                            <Rank />
                        </BorderBox3>
                    </div>
                </div>

            </div>
        )
    }
}
