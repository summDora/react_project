import React, { Component } from 'react'
import './commonpage.scss'
import Fetch from './../fetch.js'
import ClassPart from'./../components/ClassPart'
import NewPart from'./../components/NewPart'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            bannersrc:require('./../assets/image/banner.png'),
            userid:null,
            classlist:[],
            newlist:[
                {
                    month:'十二月',
                    day:'01',
                    title:'木卫六互动健身：颠覆传统跑步机',
                    newsconent:'历时两年零三个月，耗资数千万元，木卫六互动健身跑步机完成了从产品设计到内容研发的全过程。木卫六创始人陈杰曾供职于阿里以及华为，是一名连续创业者。',
                },
                {
                    month:'十一月',
                    day:'11',
                    title:'从人的生理需求中改造传统跑步机',
                    newsconent:'走进木卫六的办公室，可以看见多台跑步机。员工可以随时在不忙的时候在公司去跑步机上运动。谈及做木卫六互动健身的灵感，来源于创始人陈杰自己的健身经历。',
                },
                {
                    month:'十月',
                    day:'02',
                    title:'社交+游戏+课程让用户运动上瘾',
                    newsconent:'跑步机是硬件, 搭载课程内容和游戏作为软件是木卫六跑步机的一大特色。这台跑步机的彩蛋不只是跑步机，还有课程和游戏。在自己运动体验的过程中，',
                },
                {
                    month:'六月',
                    day:'25',
                    title:'颠覆健身行业，就是要边玩边运动',
                    newsconent:'随着生活水平的不断上升，健身运动逐渐成为当代人消除工作压力、追求潮流生活的一种选择。但办一张健身卡，一年只去五次；买台跑步机到家里，最后变成',
                },
                {
                    month:'五月',
                    day:'07',
                    title:'一切的前提是要具备一个健康的身体',
                    newsconent:'针对此，木卫六也对所有健身相关的产品持开放合作的心态，在研发产品的时候，就已设置保留了外部接口。期待在不久的未来，可以真正颠覆健身行业，实现帮助用户做到每年运动100次',
                },
                {
                    month:'四月',
                    day:'12',
                    title:'木卫六的健身课程品类多样',
                    newsconent:'涵盖瑜伽、拳击、HIT、跑步，针对减脂、增肌、塑性等不同健身需求，为孕产、三高、心脏病等多种人群提供个性化健身服务。教程既可以直播也可以',
                },
                
            ],

        }
    }

    componentDidMount(){
        this.getClassList()
    }
    
    getClassList(){
        const _this=this
        Fetch({
            url:'/webProduct/list.html',
            method:'GET',
          }).then(function(res){
              _this.setState({
                  classlist:res.data
              })
            console.log(_this.state.classlist[0])
          })
    }
    render() {
        const classList=this.state.classlist.map((item,index)=>
            <ClassPart info={item} key={index}/>
        )
        const newList=this.state.newlist.map((item,index)=>
            <NewPart info={item} key={index} />
        )
        return (
            <div className='Home'>
                <div className="banner">
                    <img src={this.state.bannersrc} alt="icp" />
                </div>
                <p className="title">课程购买服务</p>
                <div className="maincontent buyclass">{classList}</div>
                <p className="title">新闻动态</p>
                <div className="maincontent">{newList}</div>
            </div>
        )
    }
}
