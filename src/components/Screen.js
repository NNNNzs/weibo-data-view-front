import React, { Component } from 'react';
// import { FullScreenContainer } from '@jiaminghi/data-view-react'
import Layout from './Layout'

export default class Screen extends Component {
    render() {
        return (
            <div style={{height:'100vh',width:'100vw'}}>
                <Layout />
            </div>
        )
    }
}
