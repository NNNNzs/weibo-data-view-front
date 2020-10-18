import React from 'react'
export class InfoFlowItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <div className="card m-panel card9 weibo-member">
                <div className="card-wrap">
                    <div className="card-main">
                        {/* <div className="card-title">
                            <div className="m-ctrl-box">
                                <div className="m-diy-btn m-box-col m-box-center m-box-center-a">
                                    <h4>{this.props.item.mblog.title.text}</h4>
                                </div>
                            </div>

                        </div> */}
                        <header className="weibo-top m-box m-avatar-box">
                            <a href="/" className="m-img-box">
                                <img alt="" src={this.props.item.mblog.user.profile_image_url} />
                                {/* 认证 */}
                                <i className="m-icon m-icon-yellowv"></i>
                            </a>
                            <div className="m-box-col m-box-dir m-box-center">
                                <div className="m-text-box">
                                    <a href="/">
                                        <h3 className="m-text-cut">{this.props.item.mblog.user.screen_name}</h3>
                                    </a>
                                    <h4 className="m-text-cut"><span className="time">{this.props.item.mblog.created_at}</span><span className="from"> 来自 {this.props.item.mblog.source}</span>
                                    </h4>
                                </div>
                            </div>
                        </header>
                        <article className="weibo-main">
                            <div className="weibo-og">
                                <div className="weibo-text" dangerouslySetInnerHTML={{ __html: this.props.item.mblog.text }}>
                                </div>
                                <div>
                                    <div className="weibo-media-wraps weibo-media media-b">
                                        <ul className="m-auto-list">
                                            {/* {this.props.item.mblog.pics||[].map(li => {
                                                return (
                                                    <li className="m-auto-box" key={li.pid} >
                                                        <div className="m-img-box m-imghold-square">
                                                            <img alt={li.pid} src={li.url} />
                                                        </div>
                                                    </li>
                                                )
                                            })} */}

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default (props) => {
    return (<>
        <div className="card m-panel card9 weibo-member">
            <div className="card-wrap">
                <div className="card-main">
                    {/* <div className="card-title">
                        <div className="m-ctrl-box">
                            <div className="m-diy-btn m-box-col m-box-center m-box-center-a">
                                <h4>{props.item.mblog.title.text}</h4>
                            </div>
                        </div>

                    </div> */}
                    <header className="weibo-top m-box m-avatar-box">
                        <a href="/" className="m-img-box">
                            <img alt="" src={props.item.mblog.user.profile_image_url} />
                            {/* 认证 */}
                            <i className="m-icon m-icon-yellowv"></i>
                        </a>
                        <div className="m-box-col m-box-dir m-box-center">
                            <div className="m-text-box">
                                <a href="/">
                                    <h3 className="m-text-cut">{props.item.mblog.user.screen_name}</h3>
                                </a>
                                <h4 className="m-text-cut"><span className="time">{props.item.mblog.created_at}</span><span className="from"> 来自 {props.item.mblog.source}</span>
                                </h4>
                            </div>
                        </div>
                    </header>
                    <article className="weibo-main">
                        <div className="weibo-og">
                            <div className="weibo-text" dangerouslySetInnerHTML={{ __html: props.item.mblog.text }}>
                            </div>
                            <div>
                                <div className="weibo-media-wraps weibo-media media-b">
                                    <ul className="m-auto-list">
                                        {/* {props.item.mblog.pics||[].map(li => {
                                            return (
                                                <li className="m-auto-box" key={li.pid} >
                                                    <div className="m-img-box m-imghold-square">
                                                        <img alt={li.pid} src={li.url} />
                                                    </div>
                                                </li>
                                            )
                                        })} */}

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </>
    )
}