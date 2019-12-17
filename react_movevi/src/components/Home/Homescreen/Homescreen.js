import React from 'react'
import './Homescreen.scss'
import Homeinfo from './../Homeinfo/Homeinfo'
import Tv from './../Tv/Tv'

//type==1 文字图片左右分栏   
//type==0 文字在上  图片为背景

class Homescreen extends React.Component{
    render() {
        const type=Number(this.props.type.type)
        const position=this.props.type.position
        const backposition=this.props.type.backposition
        const imgsrc=this.props.type.imgsrc
        const backcolor=this.props.type.backcolor
        const meaning=this.props.type.meaning

        const homeinfodetail={
            number:this.props.type.number,
            title:this.props.type.title,
            zhtitle:this.props.type.zhtitle,
            content:this.props.type.content,
            extras:this.props.type.extras,
        }
        
        if(type===0){
            return(
                <div className={["Homescreen", (position==='top')?"toplist":null,(backposition==='center')?"back":'backright'].join(' ')}  style={{backgroundImage:"url("+imgsrc+")"}}>
                    <Homeinfo detail={homeinfodetail} />
                </div>
            )
        }
        if(type===1){
            if(this.props.type.tv){
                return(
                    <div className={['Homescreen',(meaning===3)?'rightscreen':'leftscreen'].join(' ')} style={{backgroundColor: (backcolor===true) ? "rgba(242,245,246,1)" : "#ffffff"}}>
                        <Tv imgsrc={imgsrc} tvsrc={this.props.type.tvsrc} />
                        <Homeinfo detail={homeinfodetail} /> 
                    </div>
                )
            }else{
                return(
                    <div className='Homescreen rightscreen' style={{backgroundColor:"rgba(242,245,246,1)"}}>
                        <img className='leftimg' alt='木卫六跑步机' src={imgsrc} />
                        <Homeinfo detail={homeinfodetail} /> 
                    </div>
                )
            }
            
        }        
    }
}
export default Homescreen