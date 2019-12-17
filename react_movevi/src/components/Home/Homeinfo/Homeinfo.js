import React from 'react'
import './Homeinfo.scss'
import { Button } from 'antd';
class Homeinfo extends  React.Component{
    render() {
        const detail=this.props.detail
        const contentlist=detail.content.map((item,index)=>
        <div className="content" key={index}>
            <p className="title">{item.title}</p>
            <div className="info">{item.content}</div>
        </div>
        )
        let btn=null
        if(detail.extras){
            btn=<div className='btn'>
                    <Button>了解更多</Button>
                    <Button type="danger">立即定购</Button>
                </div>
        }

        return(
            <div className='list homeinfo'>
                <div className="top">
                    <span className="leftnumber">{detail.number}</span>
                    <div className="righttitle">
                        <p>{detail.title}</p>
                        <p>{detail.zhtitle}</p>
                    </div>
                </div>
                {contentlist}
                {btn}
            </div>
        )
    }
}
export default Homeinfo;