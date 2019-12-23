import React from 'react';
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import Homescreen from './../../components/Home/Homescreen/Homescreen'
import './Home.scss'
import { Button } from 'antd';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgsrc:require('./../../assets/images/now_one_bg.png'),
            imghomebottom:require('./../../assets/images/home_bottom_left.png'),
            homescreen:[
                {
                    type:0,
                    number:'01',
                    title:'REVOLUTIONARY',
                    zhtitle:'革命性产品',
                    backposition:'center',
                    imgsrc:require('./../../assets/images/now_revo.png'),
                    content:[
                        {
                            title:'拒绝枯燥，打破常规',
                            content:'与以往的跑步机不同，木卫六具备了远超于一条跑带的价值，搭载了适配跑步机的趣味游戏、专业私教直播课程和多样的社交玩法，拒绝枯燥与机械的运动，降低运动本身反人性属性所带来的痛苦感。',
                        },
                        {
                            title:'用享受替代坚持',
                            content:'我们认为，需要靠意志力强撑的运动通常都很难坚持。所以我们要做的事情是让你忘记痛苦，沉浸在快乐里，更有趣地运动。',
                        },
                    ],
                    extras:true,
                },
                {
                    type:1,
                    meaning:3,
                    number:'02',
                    title:'DESIGN',
                    zhtitle:'折叠设计',
                    backcolor:true,
                    imgsrc:require('./../../assets/images/now_design.png'),
                    content:[
                        {
                            title:'不是为了折叠而折叠',
                            content:'传统跑步机的折叠设计是为了收纳，但我们的折叠设计是为了创造出全新的家庭运动场景，让你更多样、更趣味的运动，真正使木卫六成为家庭健身娱乐中心。',
                        },
                        {
                            title:'适宜家庭健身全场景的全新设计',
                            content:'我们拓展了多种使用场景，除了平放形态，更加入了半折叠与立式使用，让更多的用户享受到除了基础跑步之外的瑜伽、网球、拳击、体感游戏等多种运动形式。',
                        },
                    ],
                    extras:false,
                },
                {
                    type:0,
                    number:'03',
                    title:'THE BIGGEST DISPLAY',
                    zhtitle:'23.8寸高清触控巨屏',
                    imgsrc:require('./../../assets/images/now_display_bg.png'),
                    backposition:'center',
                    content:[
                        {
                            title:'超大屏幕，为运动增色',
                            content:'我们首次尝试了在跑步机上配备23.8寸1080p超大屏幕，大屏的加入能让你告别在常规跑步机上跑步时，由于手机屏幕太小、需低头和耳机易脱落带来的痛苦感。',
                        },
                        {
                            title:'逼真细腻，震撼双眼',
                            content:'更高的分辨率带来更优质的色域还原能力、更出色的画质和更宽广的视角。满足你运动中娱乐的种种所需，这不只是为运动赋能，更是对它重新定义。',
                        },
                        {
                            title:'灵敏触控，自由随心',
                            content:'在跑步机的大屏上用手指操作，改变了一切。指尖操作顺滑灵敏，实现人机协同，带来非同凡响的兴奋感和流畅动感的运动体验。',
                        },
                    ],
                    extras:false,
                },
                {
                    type:0,
                    number:'04',
                    title:'TECHNOLOGY',
                    zhtitle:'易用背后，是强大科技',
                    imgsrc:require('./../../assets/images/now_tec_bg.png'),
                    content:[
                        {
                            title:'低功耗、高性能处理器与智能协控系统联合，实时传输运动数据',
                            content:'RK3399智能芯片作为跑步机的智能中央控制器，与机器内部独有的智能协控系统联合，将每分钟200次监测、搜集、分析你的运动数据，并将数据反馈到你的个人中心，让你对你的运动状况更了然于心。其拥有的2G内容，能够轻松负载3D游戏。',
                        },
                        {
                            title:'持续进化的智能系统',
                            content:'所有木卫六跑步机都将通过定期进行的空中软件更新而不断完善、迭代和升级，让机器不断成长，让你享受到最新的内容',
                        },
                        {
                            title:'让手机与跑步机无缝联动',
                            content:`-预约直播课程\n-分享个人运动数据\n-辅助社交\n-售后服务\n-远程控制\n-设置安全锁`,
                        },
                    ],
                    extras:false,
                },
                {
                    type:1,
                    number:'05',
                    title:'CONTENT',
                    zhtitle:'娱乐无界',
                    imgsrc:require('./../../assets/images/now_content_top.png'),
                    tv:true,//tv component
                    tvsrc:require('./../../assets/images/now_content_bot.png'),
                    backcolor:true,
                    content:[
                        {
                            title:'FitOS，正是它， 让木卫六如此与众不同',
                            content:'木卫六自主研发适配跑步机的FitOS系统，采用了软硬件协同设计，为你带来丰富的影音体验。支持家庭成员多账号登陆，每个人的运动数据都只会在自己的个人中心界面呈现',
                        },
                    ],
                    extras:false,
                },
                {
                    type:1,
                    meaning:3,
                    number:' ',
                    title:'Foot tour',
                    zhtitle:'脚游',
                    imgsrc:require('./../../assets/images/now_foot_top.png'),
                    tv:true,
                    tvsrc:require('./../../assets/images/now_content_bot.png'),
                    content:[
                        {
                            title:'多款脚游，带给你沉浸式的运动体验',
                            content:'奔跑吧歌神-跑步听歌，互动竞猜\n 家庭马拉松-不出家门跑遍全世界\n体感游戏-多人联动游戏',
                        },
                    ],
                    extras:false,
                },
                {
                    type:0,
                    number:' ',
                    title:'LIVE STREAM CLASSES',
                    zhtitle:'私教直播与课程',
                    imgsrc:require('./../../assets/images/now_live_bg.png'),
                    position:'top',
                    content:[
                        {
                            title:'健身直播互动',
                            content:'直播，家居式场景，沉浸式训练，私人空间，为你带来便捷运动方式。你可随时体验跑步、瑜伽、拳击、HIIT等专业私教课程。',
                        },
                    ],
                    extras:false,
                },
                {
                    type:1,
                    number:' ',
                    title:'SOCIAL',
                    zhtitle:'社交',
                    imgsrc:require('./../../assets/images/now_social.png'),
                    tv:true,
                    tvsrc:require('./../../assets/images/now_content_bot.png'),
                    content:[
                        {
                            title:'运动社交两不误',
                            content:'FitOS系统基于地理位置和运动轨迹，为你推荐志同道合的跑友。你可以与你感兴趣的任何人成为好友并与他们聊天，也可以通过木卫六APP定向邀请你的好友参与游戏对战或参加健身课程，并通过FitOS系统，与木卫六所有用户产生真实连接',
                        },
                    ],
                    extras:false,
                },
            ]
            
        }
    }
    render(){
        const screenList=this.state.homescreen.map((item,index)=>
            <Homescreen type={item} key={index}></Homescreen>
        )
        return(
            <div className='Home'>
                <Firstscreen 
                imgsrc={this.state.imgsrc}
                highTitle='RUNNERS WANTED' 
                lowerTitle='不枯燥的运动 始于木卫六'>
                </Firstscreen>
                {screenList}
                <div className="home_bottom">
                    <div className="leftpart" style={{backgroundImage:'url('+this.state.imghomebottom+')'}}>
                        家庭健身服务的未来在这里<br />
                        The future of home fitness services is homescreen<br />
                        <Button className='vip' type="danger">会员中心</Button>
                        <p className="footer">
                            MOVE VI将改变我们的运动方式，带领我们进入家庭健身新时代
                        </p>
                    </div>
                    <div className="rightpart">
                        <img src={require('./../../assets/images/home_bottom.png')}  alt='木卫六跑步机' />
                    </div>                 
                </div>
            </div>
        );
    }
}
export default Home;