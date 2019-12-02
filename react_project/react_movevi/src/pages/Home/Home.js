import React from 'react';
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import Homescreen from './../../components/Homescreen/Homescreen'
import './Home.scss'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgsrc:require('./../../assets/images/now_one_bg.png'),
            homescreen:[
                {
                    type:0,
                    number:'01',
                    title:'REVOLUTIONARY',
                    zhtitle:'革命性产品',
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
                    type:2,
                    number:'02',
                    title:'DESIGN',
                    zhtitle:'折叠设计',
                    imgsrc:require('./../../assets/images/now_revo.png'),
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
                    type:1,
                    number:'03',
                    title:'THE BIGGEST DISPLAY',
                    zhtitle:'23.8寸高清触控巨屏',
                    imgsrc:require('./../../assets/images/now_revo.png'),
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
            ]
            
        }
    }
    render(){
        const screenList=this.state.homescreen.map((item,index)=>
        <Homescreen type={item} key={index} ></Homescreen>
        )
        return(
            <div className='Home'>
                <Firstscreen 
                imgsrc={this.state.imgsrc}
                highTitle='RUNNERS WANTED' 
                lowerTitle='不枯燥的运动 始于木卫六'>
                </Firstscreen>
                {screenList}
            </div>
        );
    }
}
export default Home;