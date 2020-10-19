import React from 'react';
import InforFlowItem from './InfoFlowItem'
import axios from 'axios'
// import data from './1.js'

export default class MyIframe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            page: 1,
            list: [],
            index: 0
        }
        this.dom = null
        this.timer = null
    }
    getData(keyword) {
        axios({
            url: '/api/container/getIndex',
            params: {
                page_type: 'searchall',
                containerid: `100103type=1&q=${keyword}`,
                page: this.state.page
            }
        })
            .then(res => {
                const { data } = res;
                if (data.ok === 1) {
                    const list = data.data.cards.filter(e => e.card_type === 9)
                    this.setState({ list })
                    this.autoScroll()
                }
            })
    }
    componentDidUpdate(prevProps) {
        if (this.props.keyword && this.props.keyword !== this.state.keyword) {
            const { keyword } = this.props;
            this.setState({ keyword,index:0 });
            this.getData(keyword)
        }
    }
    autoScroll() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let { index, list } = this.state;
            const dom = this.dom.querySelectorAll('.card')[index];
            dom.scrollIntoView({ behavior: "smooth" })
            if (index + 1 === list.length) {
                index = 0
            } if (index + 5 === list.length) {
                //todo 增加信息流
            } else {
                index++
            }
            this.setState({ index })
        }, 4000)
    }
    render() {
        return (
            <div ref={ref => { this.dom = ref }}>
                {this.state.list.map((e, index) => {
                    return <InforFlowItem key={index} item={e} />
                })}
            </div>
        )
    }
}