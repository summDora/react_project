import React from 'react'
import './ProductInfo.scss'
class ProductInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display:'none',
            bigdisplay:'none',
        }
    }
    componentDidMount(){
        if(this.props.detail.power){
            this.setState({
                display:'block'
            })
        }
        
    }
    imgpower(){
        this.setState({
            bigdisplay: 'block',
            display:'none',
        })
        let top=this.bigimg.offsetTop
        window.scrollTo(0,top);
        document.addEventListener('DOMMouseScroll', this.scrollFunc, {passive: false });
    }
    imgsmall(){
        this.setState({
            bigdisplay: 'none',
            display:'block',
        })

    }
    render(h) {
        const info=this.props.detail
        if(!info.power){
            info.position={
                left:null,
                top:null,
            }
        }
        return(
            <div className={['ProductInfo',(info.type===2)?'reverse':null].join(' ')} 
            ref={(r)=>{this.bigimg = r}} >
                <div className="fontpart">
                    <div className="font">
                        <p className="toptitle">{info.title}</p>
                        <p className="bottitle">{info.content}</p>
                    </div>
                </div>
                <div className="imgpart">
                    <img 
                    src={info.imgsrc} 
                    onClick={this.imgpower.bind(this)}
                    className='gamepic' alt='木卫六跑步机' />
                    <img 
                    src={require('./../../assets/images/focus.png')}
                    style={{display:this.state.display,left:info.position.left,top:info.position.top}}
                    className='closeicon'
                    alt='木卫六跑步机' />
                </div>
                <img 
                src={info.imgsrcpower} 
                onClick={this.imgsmall.bind(this)}
                style={{display:this.state.bigdisplay}}
                className='bigimg'
                alt='木卫六跑步机' />
            </div>
        )
    }
}
export default ProductInfo;