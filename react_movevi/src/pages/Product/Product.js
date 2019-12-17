import React from 'react';
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import './Product.scss'
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ImgPower from '../../components/ImgPower/ImgPower'
import BottomInfo from '../../components/BottomInfo/BottomInfo'
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgsrc:require('./../../assets/images/product_top_bg.png'),
            productDetail:[
                {
                    toptitle:'23.8英寸',
                    bottitle:'高清触摸屏.',
                    content:'MOVE VI搭载的23.8寸1080P高清触摸大屏是对传统跑步机硬件的一项创新性改进。屏幕采用了RK3399芯片与智能协控系统，不仅搭载了游戏和影音娱乐，还兼容了课程与社交。',
                    imgsrc:require('./../../assets/images/product_bg_2.png'),
                    position:'left'
                },
                {
                    toptitle:'安全舒适',
                    bottitle:'两部折叠.',
                    content:'折叠柱的设计使机器更牢固，折叠更方便，带来不一样的视觉体验。',
                    imgsrc:require('./../../assets/images/product_bg_3.png'),
                    position:'right'
                },
            ],
            productInfo:[
                {
                    type:1,
                    title:'独特的折叠设计',
                    content:'半折叠后的机器为女性用户在家参与专业瑜伽私教直播课程提供了可能性与便捷性',
                    imgsrc:require('./../../assets/images/fold.png'),
                },
                {
                    type:2,
                    title:'丰富你的运动场景',
                    content:'质移动轮的设计拓展了全新的使用场景，直立后的机器使你可以跟随直播课程练习拳击，还可以享受羽毛球、网球、乒乓球等体感游戏',
                    imgsrc:require('./../../assets/images/colorful.png'),
                },
                {
                    type:1,
                    title:'结构性铝金属骨架',
                    content:'整体骨架由高强度铝合金材质通过非焊接工艺构成，机器轻巧便捷，外观精美。铝合金便于进行精密加工，各种缝隙处理就会更加细致，缝隙仅一丝，相当于一根头发丝直径。',
                    imgsrc:require('./../../assets/images/lv.png'),
                },
            ],

            black_product:require('./../../assets/images/data-black.png'),
            silver_product:require('./../../assets/images/data-gray.png'),
            imgsrc_product:null,
            bg_black_color:false,
            bg_silver_color:false,

        }
    }
    black(){
        this.setState({
            imgsrc_product:this.state.black_product,
            bg_black_color:true,
            bg_silver_color:false
        })
    }
    silver(){
        this.setState({
            imgsrc_product:this.state.silver_product,
            bg_black_color:false,
            bg_silver_color:true
        })
    }
    componentDidMount(){
        this.setState({
            imgsrc_product:this.state.black_product
        })
    }

    render(){
        const detailList=this.state.productDetail.map((item,index)=>
        <ProductDetail detail={item} key={index} />
        )
        const infoList=this.state.productInfo.map((item,index)=>
        <ProductInfo detail={item} key={index} />
        )
        return(
            <div className='Product'>
                <Firstscreen 
                imgsrc={this.state.imgsrc}
                highTitle='MOVE VI' 
                lowerTitle='为全新的运动场景而设计' />
                {detailList}
                {infoList}
                <div className="picpower">
                    <div className="child">
                        <ImgPower 
                        s_img_src={require('./../../assets/images/jiegou.png')}
                        b_img_src={require('./../../assets/images/full_1.png')}
                        title='全铝结构'
                        content={'跑台：超大超宽的跑台，前后贯通式无马达盖设计，跑起来无束缚感。\n跑板：柔韧镜面跑板，铝金材质高弹金属属性，10枚硅胶垫使跑步机悬浮，并柔美连接跑板与机身，利用铝合金高弹金属属性，脚感更舒适，训练更持久。'}/>
                    </div>
                    <div className="child middle">
                        <ImgPower
                        s_img_src={require('./../../assets/images/options.png')}
                        b_img_src={require('./../../assets/images/full_2.png')}
                        title='中控台'
                        content={'按键：按键全部采用硅胶实体按键，手感好，不易损坏，可一键式调节运动速度。\n旋钮：在运动中通过旋钮轻松调节速度。\n安全锁：采用隐藏式设计，与机身浑然一体，既美观又不易丢失。'}/>
                        <ImgPower
                        s_img_src={require('./../../assets/images/sound.png')}
                        b_img_src={require('./../../assets/images/full_3.png')}
                        title='音响'
                        content={'基于游戏和专业私教直播等应用需求，MOVE VI将音响各部件分解并进行精心设计，由专业声学实验团队共同研发。'}/>
                    </div>
                    <div className="child right">
                        <ImgPower
                        s_img_src={require('./../../assets/images/right-top.png')}
                        b_img_src={require('./../../assets/images/full_4.png')}
                        title='低音炮'
                        content={'结合家庭环境，采用2.1声道，打造强低音音乐互动型跑步机。'}/>
                        <ImgPower
                        s_img_src={require('./../../assets/images/xuanfu.png')}
                        b_img_src={require('./../../assets/images/full-5.png')}
                        title='减震设计'
                        content={'左右各5个硅胶减震柱，使跑板中空悬浮。跑板与跑台骨架无直接接触，通过10个硅胶减震柱相连，更好的缓解地面和走步机的冲击和震动，跑起来更舒适。'}/>
                    </div>
                </div>
 
                <div className='color'>
                    <div className="leftpart">
                        <img src={this.state.imgsrc_product} alt='木卫六跑步机' />
                    </div>
                    <div className="rightpart">
                        <p className="title">MOVE VI 规格</p>
                        <div className="btn">
                        <span className={['black',(this.state.bg_black_color===true)?'bgcolor':null].join(' ')}  onClick={this.black.bind(this)}>Black 黑曜版</span>
                        <span  className={['silver',(this.state.bg_silver_color===true)?'bgcolor':null].join(' ')} onClick={this.silver.bind(this)}>Sliver 银渐版</span>
                        </div>
                        <div className="info">
                        <div className="infodetail">
                            <p className="title">屏幕尺寸</p>
                            <p className="content">23.8英寸1080p高清触摸屏</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">最大承重</p>
                            <p className="content">130KG</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">产品尺寸</p>
                            <p className="content">L1409*W826*H1615 mm</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">娱乐功能</p>
                            <p className="content">摄像头、麦克风</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">折叠尺寸</p>
                            <p className="content">L1409*W826*H276 mm</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">速度</p>
                            <p className="content">1-15KM/H</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">跑带尺寸</p>
                            <p className="content">1300*500 mm</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">倾斜</p>
                            <p className="content">固定，无升降</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">占地面积</p>
                            <p className="content">0.32立方米</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">屏幕调整</p>
                            <p className="content">90º-180º可调节</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">重量</p>
                            <p className="content">20KG</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">材质</p>
                            <p className="content">铝合金</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">马达</p>
                            <p className="content">1.4HP（详细描述）</p>
                        </div>
                        <div className="infodetail">
                            <p className="title">技术连接</p>
                            <p className="content">支持Wi-Fi/蓝牙/USB/麦克风/相机</p>
                        </div>
                        </div>
                    </div>
                </div>
               <BottomInfo />
            </div>
        );
    }
}
export default Product;
