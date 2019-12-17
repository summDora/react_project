import React from 'react'
import './Software.scss'
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import SecondTab from './../../components/SecondTab/SecondTab'
import ProductInfo from '../../components/ProductInfo/ProductInfo'

class  Software  extends React.Component{
    constructor(props){
        super(props)
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
                    content:'羽毛球】【乒乓球】【网球】等多种游戏形式',
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
                        top: '18%',
                        left: '34%'
                    }
                },
            ],
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.orderScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.orderScroll);
    }
    orderScroll() {
        console.log('scroll');
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
                tab={this.state.tabs} />
                <div className="tabbar" id="footgame">脚游</div>
                {footgameList}
                <div className="tabbar" id="social">社交</div>
                <div className="tabbar" id="course">课程</div>
            </div>
        )
    }
}
export default Software