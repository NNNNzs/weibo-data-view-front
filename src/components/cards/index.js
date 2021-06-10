import React, { Component } from 'react';
import './index.css'
const dateType = [
  { name: "当前", id: 'all' },
  { name: "近一天", id: 'day' },
  { name: "近七天", id: 'week' },
]

const cardItem = {
  name: "华为",
  status: '收光功率异常',
  company: '华为',
  time: '2021年06月08日',
  modules: [{ name: 'BorderLeaf-10GE1/0/1', status: 1 }, { name: 'BorderLeaf-10GE1/0/2', status: 0 }]
}
const cardList = Array(100).fill('').map(e => cardItem);
// 卡片模块
const Card = function ({ props }) {
  return (
    <li className="card">
      <div className="title">
        <h4>{props.name}</h4>
        <span>{props.status}</span>
      </div>
      <div className="content">
        <ul className="info">
          <li className="info-item">
            光模块厂商:
              <span>{props.company}</span>
          </li>
          <li className="info-item">
            检测时间
              <span>{props.time}</span>
          </li>
        </ul>
        <div className="modules">
          <div className="module1">
            <div  className={['img',props.modules[0].status===1?"success":'error'].join(' ')}></div>
            <p>{props.modules[0].name}</p>
          </div>
          <div className="module2">
            <div  className={['img',props.modules[1].status===1?"success":'error'].join(' ')}></div>
            <p>{props.modules[1].name}</p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </li>
  )
}

export default class Wrapper extends Component {
  render() {
    return (<div className="wrapper">
      <h3>异常光模块</h3>
      <div className="searchBar">
        <span>时间范围</span>
        <input type="date" onChange={(event) => { this.handleInputChange(event) }} ></input>
        <ul>
          {dateType.map(e => {
            return (<li key={e.id} onClick={() => this.handleSearch({ type: e.id })}>{e.name}</li>)
          })}
        </ul>
      </div>
      <ul className="cardWrap">
        {cardList.map((ele, index) => {
          return <Card props={ele} key={index} ></Card>
        })}
      </ul>
    </div>)
  }
  handleInputChange(){
    console.log()
  }
  handleSearch(type) {
    console.log(type)
  }
}







