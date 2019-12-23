import React from 'react';
import'./Brand.scss'
class Brand extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgsrc:require('./../../assets/images/vip_top_bg.png'),
            highTitle:`Start the journey \n Move together in real time`
        }
    }
    render(){
        return(
            <div className='Brand'>
               
            </div>
        );
    }
}
export default Brand;