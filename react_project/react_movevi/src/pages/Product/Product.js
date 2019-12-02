import React from 'react';
import Firstscreen from './../../components/Firstscreen/Firstscreen'
import './Product.css'
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgsrc:require('./../../assets/images/product_top_bg.png')
        }
    }
    render(){
        return(
            <div className='Product'>
                <Firstscreen 
                imgsrc={this.state.imgsrc}
                highTitle='MOVE VI' 
                lowerTitle='为全新的运动场景而设计'>
                </Firstscreen>
            </div>
        );
    }
}
export default Product;
