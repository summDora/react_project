import React from 'react'
import './ImgPower.scss'

class ImgPower extends React.Component{
    constructor(props){
        super(props)
        this.state={
            b_img_src:props.b_img_src,
            display:'none',
            content:props.content
        }
    }
    imgpower(){
        const scrollTop = document.getElementsByClassName('picpower')[0].offsetTop
        window.scrollTo(0,scrollTop);
        document.addEventListener('DOMMouseScroll', this.scrollFunc, {passive: false });
        this.setState({
            display: 'block',
        })

    }
    imgsmall(){
        this.setState({
            display: 'none',
        })

    }
    scrollFunc(evt) {  
        evt = evt || window.event;  
        if(evt.preventDefault) {  
            evt.preventDefault();  
            evt.stopPropagation();  
        } else {  
            evt.cancelBubble=true;  
            evt.returnValue = false;  
        }  
        return false;  
    } 
    render(h) {
        return(
            <div className="imgpower_outline">
                <img className='s_img' alt='木卫六跑步机' onClick={this.imgpower.bind(this)} src={this.props.s_img_src} />
                <div className="b_img"  ref={this.b_ref}
                style={{display:this.state.display}} >
                    <img src={this.state.b_img_src} 
                    onClick={this.imgsmall.bind(this)} alt='木卫六跑步机' />
                    <div className="info">
                        <p className="title">{this.props.title}</p>
                        <div className="content">{this.state.content}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ImgPower