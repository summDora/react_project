import React, { Component } from 'react'

export default class classNamePart extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render() {
        const info=this.props.info
        let btn,mark
        if(info.status===1){
            btn=<span style={{color:'#4FCB1E'}}>观看课程</span>
            mark=<span className="mark">已购买</span>
        }
        if(info.status===2){
            btn=<span style={{color:'#2233A0'}} >购买课程</span>
            mark=<span></span>
        }
        return (
            <div className='ClassPart'>
                <div className="cover">
                    <img src={info.picture} alt="icp" />
                    {mark}
                </div>
                <div className="info">
                    <p className="className">{info.name}</p>
                    <span className="price">￥{info.price}</span>
                </div>
                <div className="info">
                    <p className="tag">{info.content}</p>
                    {btn}
                </div>   
            </div>
        )
    }
}
