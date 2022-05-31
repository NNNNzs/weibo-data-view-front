import React from 'react'
import moment from 'moment';

function replaceImg(url) {
    // const newUrl = url.match(/\/orj360.+/ig)[0];
    const newUrl = `/weibo/propxyImg?uri=${url}`
    // https://wx2.sinaimg.cn/orj360/007Wgp9lgy1gjx1fi68d8j30qy0zcqv5.jpg
    return newUrl;

}

const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

export default (props) => {
    // if(props.item.mblog.pics){
    //     console.log(props.item.user.screen_name)
    //     console.log(props.item.mblog.pics)
    // }
    const { item } = props;
    const { mblog } = item;
    const { user } = mblog;

    return (
        <div className="card m-panel card9 weibo-member">
            <div className="card-wrap">
                <div className="card-main">
                    {/* <div className="card-title">
                        <div className="m-ctrl-box">
                            <div className="m-diy-btn m-box-col m-box-center m-box-center-a">
                                <h4>{mblog.title.text}</h4>
                            </div>
                        </div>

                    </div> */}
                    <header className="weibo-top m-box m-avatar-box">
                        <a href="/" className="m-img-box">
                            <img alt="" src={user.profile_image_url} />
                            {/* 认证 */}
                            {/* <i className="m-icon m-icon-yellowv"></i> */}
                        </a>
                        <div className="m-box-col m-box-dir m-box-center">
                            <div className="m-text-box">
                                <a href="/">
                                    <h3 className="m-text-cut">{user.screen_name}</h3>
                                </a>
                                <h4 className="m-text-cut"><span className="time">{formatDate(mblog.created_at)}</span><span className="from"> 来自 {mblog.source} {mblog.region_name}</span>
                                </h4>
                            </div>
                        </div>
                    </header>
                    <article className="weibo-main">
                        <div className="weibo-og">
                            <div className="weibo-text" dangerouslySetInnerHTML={{ __html: mblog.text }}></div>
                            <div>
                                <div className="weibo-media-wraps weibo-media media-b">
                                    {
                                        mblog.pics ?
                                            <ul className="m-auto-list">
                                                {mblog.pics.map(li => {
                                                    return (
                                                        <li className="m-auto-box" key={li.pid} >
                                                            <div className="m-img-box m-imghold-square">
                                                                <img src={replaceImg(li.url)} alt="" />
                                                            </div>
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                            : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
