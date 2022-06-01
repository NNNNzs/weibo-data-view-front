import React from 'react';
import InforFlowItem from './InfoFlowItem'
import axios from 'axios'
// import data from './1.js'

const collegMblog = (list = []) => {
    let blogList = [];
    list.forEach(item => {

        if (item.mblog) {
            blogList.push(item)
        }
        else if (item.card_group) {
            item.card_group.forEach(iitem => {
                if (iitem.mblog) {
                    blogList.push(iitem)
                }
            })
        }

    })
    return blogList
}
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
    getData(keyword, page) {
        axios({
            url: '/api/container/getIndex',
            params: {
                page_type: 'searchall',
                containerid: `100103type=1&q=${keyword}`,
                page: page
            }
        })
            .then(res => {
                const { data } = res;
                if (data.ok === 1) {
                    const list = data.data.cards
                    const mblogList = collegMblog(list);
                    this.setState({ list: [...this.state.list, ...mblogList] })

                    this.autoScroll()
                }
            })
    }
    componentDidUpdate(prevProps) {
        if (this.props.keyword && this.props.keyword !== this.state.keyword) {
            const { keyword } = this.props;
            this.setState({ list: [], keyword, index: 0, page: 0 });
            this.getData(keyword, 1)
            this.getData(keyword, 2)
            this.getData(keyword, 3)
        }
    }
    autoScroll() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let { index, list } = this.state;
            const dom = this.dom.querySelectorAll('.card')[index];
            dom.scrollIntoView({ behavior: "smooth" })
            if (index + 1 === list.length - 2) {
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
                    if (e.card_type === 11) {
                        // console.log(e)
                        // return <RenderCard11 key={index} item={e} ></RenderCard11>
                    } else if (e.card_type === 9) {
                    }
                    return <InforFlowItem key={index} item={e} />
                })}
            </div>
        )
    }
}