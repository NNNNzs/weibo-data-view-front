import React, { Component } from 'react';
// import { FullScreenContainer } from '@jiaminghi/data-view-react'
import Layout from './Layout'

export default class Screen extends Component {
    componentDidMount(){
        console.log('https://github.com/NNNNzs/weibo-data-view-front');
        console.log('为了写react而写react')
    }
    render() {
        return (
            <div style={{height:'100vh',width:'100vw'}}>
                <Layout />
            </div>
        )
    }
}
