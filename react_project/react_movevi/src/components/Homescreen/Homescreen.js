import React from 'react'
import './Homescreen.scss'
//type==1 文字在左  图片在右
//type==2 文字在右  图片在左
//type==0 文字在上  图片为背景
class Homescreen extends React.Component{
    render() {
        const type=this.props.type.type
        if(type==0){
            return(
                <div className='Homescreen'>
                    文字在上  图片为背景
                </div>
            )
        }
        if(type==1){
            return(
                <div className='Homescreen'>
                   文字在左  图片在右
                </div>
            )
        }
        if(type==2){
            return(
                <div className='Homescreen'>
                    文字在右  图片在左
                </div>
            )
        }
        
    }
}
export default Homescreen