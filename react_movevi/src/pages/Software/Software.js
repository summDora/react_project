import React from 'react'
import './Software.scss'
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import SecondTab from './../../components/SecondTab/SecondTab'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import {Button} from 'antd'

class  Software  extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.state={
            imgsrc:require('./../../assets/images/sw_top_bg.png'),
            tabs:[
                {name:'脚游',anchor:'footgame'},
                {name:'社交',anchor:'social'},
                {name:'课程',anchor:'course'},
            ],
            footgameInfo:[
                {
                    type:2,
                    title:'天天马拉松',
                    content:'不出家门跑遍全世界\n在线上体验线下马拉松比赛，更可参与每月18日木卫六举办的线上大奖赛，赢取丰厚奖金。',
                    imgsrc:require('./../../assets/images/sw_game_1.png'),
                    imgsrcpower:require('./../../assets/images/sw_game_1_big.png'),
                    power:true,
                    position:{
                        top: '60%',
                        left: '27%'
                    }
                },
                {
                    type:1,
                    title:'多人联网互动的体感游戏',
                    content:'【羽毛球】【乒乓球】【网球】等多种游戏形式',
                    imgsrc:require('./../../assets/images/sw_game_2.png'),
                    imgsrcpower:require('./../../assets/images/sw_game_2_big.png'),
                    power:true,
                    position:{
                        top: '39%',
                        left: '84%'
                    }
                },
                {
                    type:2,
                    title:'真人跑酷',
                    content:'不仅锻炼了身体，也能体会到游戏的乐趣',
                    imgsrc:require('./../../assets/images/sw_game_3.png'),
                    imgsrcpower:require('./../../assets/images/sw_game_3_big.png'),
                    power:true,
                    position:{
                        top: '20%',
                        left: '76%'
                    }
                },
                {
                    type:1,
                    title:'奔跑吧歌神',
                    content:'跑步听歌，互动竞猜\n你可以选择游戏为闯关或对战模式，截取耳熟能详的歌曲中40s高潮部分，听完即为互动竞猜环节。',
                    imgsrc:require('./../../assets/images/sw_game_4.png'),
                    imgsrcpower:require('./../../assets/images/sw_game_4_big.png'),
                    power:true,
                    position:{
                        top: '16%',
                        left: '33%'
                    }
                },
            ],
            scrollTop:null,
            position:'absolute'
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.orderScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.orderScroll);
    }
    orderScroll=()=>{
        //请勿直接更改状态 需要使用setState({}) 直接this.state.xxxx不会刷新dom
        this.setState({
            scrollTop:document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        })
        const top=this.refTab.offsetTop
        if(this.state.scrollTop>=top){
            let tab=document.getElementsByClassName('secondetab')[0]
            tab.style['position']="fixed";
            tab.style['top']="0px";
        }
        if(this.state.scrollTop<top){
            let tab=document.getElementsByClassName('secondetab')[0]
            tab.style['position']="relative";
        }
    }
    render(h) {
        const footgameList=this.state.footgameInfo.map((item,index)=>
        <ProductInfo detail={item} key={index} />
        )
        return(
            <div className='software'>
                <Firstscreen
                imgsrc={this.state.imgsrc}
                highTitle='MOVE VI' 
                lowerTitle='全新创造的家庭健身FitOS系统' />
                <SecondTab 
                msg={"传递给子组件的消息：" + this.state.scrollTop}
                style={{position:this.state.position}}
                tab={this.state.tabs} />
                <div className="tabbar"  ref={(r)=>{this.refTab = r}} id="footgame">脚游</div>
                {footgameList}
                <div className="tabbar" id="social">社交</div>
                    <div className="social">
                        <div className="contain">
                            <img src={require('./../../assets/images/sw_social_1.png')} alt='木卫六跑步机' />
                        </div>
                        <div className="contain">
                            <div className="font">
                            <div className="content">FitOS系统基于地理位置和运动轨迹，<br/>为你推荐志同道合的跑友。<br/>你可以与你感兴趣的任何人成为好友并与他们聊天</div>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="font">
                            <div className="content">你可以通过木卫六APP定向邀请你的好友<br/>参与游戏对战或参加健身课程，<br/>并通过FitOS系统，<br/>与木卫六所有用户产生真实连接。</div>
                            </div>
                        </div>
                        <div className="contain">
                            <img src={require('./../../assets/images/sw_social_3.png')} alt='木卫六跑步机'  />
                        </div>
                    </div>
                    <div className="comment">
                        <img src={require('./../../assets/images/sw_social_5.png')} alt="木卫六跑步机" />
                        <img src={require('./../../assets/images/sw_social_4.png')} alt="木卫六跑步机" />
                    </div>
                <div className="tabbar" id="course">课程</div>
                <div className="live">
                    <div className="top">
                        <p className="title">Unlock all the benefits of the MOVEVI experience.</p>
                        <p className="info">
                        家居式场景，沉浸式训练，私人空间，为您带来便捷运动方式。<br />
                        您可随时体验跑步、瑜伽、拳击、HIIT等专业私教课程。
                        </p>
                        <p className="bot">MOVIVI木卫六需单独购买</p>
                        <Button>点击了解会员特权</Button>
                    </div>
                    <div className="middle">
                        <img src={require('./../../assets/images/sw_live_1.png')}  alt="木卫六跑步机" />
                    </div>
                    <div className="bottom">
                        <div className="leftpart">  
                        <img src={require('./../../assets/images/sw_live_bottom.png')}  alt="木卫六跑步机" />
                        </div>
                        <div className="rightpart">
                        <p className="title">REDAY TO TRY THE MOVEVI?</p>
                        <p className="info"> 随时随地享受更便捷的专业指导<br/>期待您的加入</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Software