import React from 'react';
import'./Brand.scss'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import SecondTab from './../../components/SecondTab/SecondTab'
class Brand extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgsrc:require('./../../assets/images/why.png'),
            highTitle:`Start the journey \n Move together in real time`,
            tabs:[
                {name:'木卫六',anchor:'vi'},
                {name:'团队',anchor:'team'},
                {name:'公司',anchor:'company'},
                {name:'WE ARE',anchor:'weare'},
                {name:'愿景',anchor:'wish'},
                {name:'联系方式',anchor:'concact'},
            ],
            scrollTop:null,
            position:'absolute',
            newlist:[
                require('./../../assets/images/person_1.png'),
                require('./../../assets/images/person_2.png'),
                require('./../../assets/images/person_3.png'),
                require('./../../assets/images/person_4.png'),
                require('./../../assets/images/person_5.png'),
                require('./../../assets/images/person_6.png'),
                require('./../../assets/images/person_7.png'),
                require('./../../assets/images/person_8.png'),
                require('./../../assets/images/person_9.png'),
                require('./../../assets/images/person_10.png'),
                require('./../../assets/images/person_11.png'),
            ],
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.orderScroll);
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            /* centeredSlides: true,
            virtual: {
                slides:this.state.newlist,
            } */
        })
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.orderScroll);
    }
    orderScroll=()=>{
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

    render(){
        const swiperlist=this.state.newlist.map((item,index)=>
            <div class="swiper-slide">
                <img src={item} key={index} alt="木卫六跑步机" />
            </div>
        )
        return(
            <div className='Brand'>
                <div className="banner">
                    <div className='box'>
                        <p className="toptitle">Our Story</p>
                        <p>Learn about ​MoveVI and our mission.</p>
                    </div>
                </div>
                <SecondTab 
                style={{position:this.state.position}}
                tab={this.state.tabs} />
                <div className="tabbar"  ref={(r)=>{this.refTab = r}} id="vi">关于木卫六</div>
                <div className="vi">
                    <div 
                    className="leftpart"
                    style={{backgroundImage:'url('+this.state.imgsrc+')'}}>
                    </div> 
                    <div className="rightpart">
                        <p className="en">BEHIND THE NAME</p>
                        <p className="ch">命名由来</p>
                        <div className="content">
                            “木卫六，又称为「希玛利亚」（Himalia），是木星的一颗自然卫星。 在1975年以前，它也被以木星VI（Jupiter VI）或木星卫星VI（Jupiter Satellite VI）的临时代号称呼。 2009年12月美国宇航局证实，木卫六是 太阳系里最有可能找到生命的地方，上面存在着液体，但是这些湖泊里 到底有没有存在生命，目前仍然不得而知，需要我们不停的探索。<br /><br />这也是我们想做的事情——不局限于已知与传统，不停探索更多的可 能性。木卫六是一种愿景，它有关探索、描述与定义，作为先驱者与 颠覆者，我们要创造出一种全新的、不枯燥的运动体验。从一个点到另一个点，从一个人到另一个人，连接你和我的运动世界。”
                        </div>
                    </div>              
                </div>
                <div className="tabbar"  id="team">我们是如何开始的？</div>
                <div className="team">
                    <p className="title">木卫六团队</p>
                    <div className="photo">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {swiperlist}
                            </div>
                        </div>
                    </div>
                    <p className="title">木卫六使命</p>
                    <div className="content">
                    一切都源于日常生活中一些值得深思的问题，为什么我们办了那么多健身卡，买了那么多私教课，却从来没办法坚持运动下去？好的跑步机就应该是现在市面上见到的这样子吗？一条跑带加上一根支撑住，或者强行将跑步机与手机连接，就是全部了吗？<br /><br />我们不能坚持下去，并非我们缺乏意志力，而是我们还没有遇到足够好的产品。这让我们看到了跑步机的未来：能边玩游戏边跑步、听音乐、看电影，与结识新的朋友并与他们互动，在家就能上专业私教直播课程，探索家庭健身的新方式。所谓“跑步机”，就应该像今天的MOVE VI一样。<br /><br />我们创造了家庭健身的新概念，你只要在自己的家中，在任何你想要的时间，与任意朋友一起运动。
                    </div>
                </div>
                <div className="tabbar"  id="company">杭州轻程网络技术有限公司</div>
                <div className="company">
                    <p className="title">轻程网络</p>
                    <div className="content">
                    "木卫六 "诞生于杭州轻程网络技术有限公司，该公司由创始人陈杰与2017年7月31号创办，目前拥有50+名员工。<br />陈杰早年曾供职与华为、阿里。在离职后连续创业，在此前的项目曾获得松禾资本和经纬创投的投资。杭州轻程网络技术有限公司也在2019年9月获得愉悦资本数百万美金的天使轮投资。<br /><br />陈杰本身酷爱运动，也深知运动健康的重要性，然而由于时间以及乐趣等原因无法坚持长期的运动。拥有互联网基因的他萌生了一个想法，制造一款能让人运动上瘾的跑步机。而且这款跑步机还结合互联网，连接一个个真实的人，让大家一起愉快的健身和运动。在他看来，“木卫六”不只是一台跑步机，而是一个以健身交互为核心，以各种互联网应用为工具的健身大平台。<br /><br />说干就干，陈杰创建了轻程网络，历史两年零三个月，耗资数千万，“木卫六”从此诞生了。<br />我们如今看到的“木卫六”，融入了直播课程、游戏竞技、体感游戏、娱乐社交，彻底颠覆了健身产业的传统模式。
                    </div>
                </div>
                <div className="tabbar"  id="weare">我们是一家</div>
                <div className="weare">
                    <div className="info">
                        <img src={require('./../../assets/images/ic_game.png')} alt="木卫六跑步机"  />
                        <span className="ch">游戏公司</span><span className="en">/GAME</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_software.png')} alt="木卫六跑步机"  />
                        <span className="ch">软件公司</span><span className="en">/SOFTWARE</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_design.png')} alt="木卫六跑步机"  />
                        <span className="ch">设计公司</span><span className="en">/DESIGN</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_technology.png')} alt="木卫六跑步机"  />
                        <span className="ch">科技公司</span><span className="en">/TECHNOLOGY</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_experience.png')} alt="木卫六跑步机"  />
                        <span className="ch">体验公司</span><span className="en">/EXPERICENCE</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_media.png')} alt="木卫六跑步机"  />
                        <span className="ch">媒体公司</span><span className="en">/MEDIA</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_retail.png')} alt="木卫六跑步机"  />
                        <span className="ch">零售公司</span><span className="en">/RETAIL</span>
                    </div>
                    <div className="info">
                        <img src={require('./../../assets/images/ic_social.png')} alt="木卫六跑步机"  />
                        <span className="ch">互动社交公司</span><span className="en">/SOCIAL</span>
                    </div>
                </div>

                <div className="tabbar"  id="wish">我们要做一件什么事情？</div>
                <div className="tabbar"  id="concact">联系方式</div>
            </div>
        );
    }
}
export default Brand; 