import './Vip.scss'
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import {Button} from 'antd'
import React, { Component } from 'react';

export class Vip extends Component {
    constructor(props){
        super(props)
        this.state={
            imgsrc:require('./../../assets/images/vip_top_bg.png'),
            yes:require('./../../assets/images/agree.png'),
            sportimg:require('./../../assets/images/vip-card-left.png'),
            buyimg:require('./../../assets/images/vip-card-right.png'),
            highTitle:`Start the journey \n Move together in real time`,
            sportinfo:[
                {
                    title:'每天瑜伽、拳击、HIIT等多节专业私教直播课程和数百个按需课程'
                },
                {
                    title:'体验奔跑吧歌神、真人跑酷等运动游戏'
                },
                {
                    title:'畅玩羽毛球、网球、乒乓球等体感游戏'
                },
                {
                    title:'会员特殊标识，可抵现金'
                },
            ],
        }
    }
    render() {
        const sport_list=this.state.sportinfo.map((item,index)=>
            <p className="info">
                <img src={this.state.yes} alt="木卫六跑步机" />  
                {item.title}
            </p>
        )

        return (
            <div className='Vip'>
                <Firstscreen 
                imgsrc={this.state.imgsrc}
                highTitle={this.state.highTitle} 
                lowerTitle='与所有会员一起，开启你的木卫六之旅'>
                </Firstscreen>
                <div className="two">
                    <div className="contentbox">
                        <div className="box">
                            <div className="top">
                                <img src={this.state.sportimg} alt="木卫六跑步机" />
                            </div>
                            <div className="bottom">
                                <Button type='danger' ghost>运动</Button>
                                <div className="content">跑步2公里后自动获得，每天最多1颗星，在购买VIP星之前，系统会自动抵扣拥有的VIP星。通过跑步获得VIP星，每颗VIP星可以抵消9.9元。</div>
                                <Button type='danger' ghost>会员特权</Button>
                                <div className="content">{sport_list}</div>
                            </div>
                        </div>
                        <div className="box gray">
                            <div className="top">
                                <img style={{width:'24px'}} src={this.state.buyimg} alt="木卫六跑步机" />
                            </div>
                            <div className="bottom">
                                <Button type='danger' ghost>运动</Button>
                                <div className="content wrap">
                                通过木卫六跑步机、app购买<br />
                                ￥99/月
                                </div>
                                <Button type='danger' ghost>会员特权</Button>
                                <div className="content">{sport_list}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Vip;




