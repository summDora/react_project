import React from 'react'
import './ProductInfo.scss'
class ProductInfo extends React.Component{
    render(h) {
        const info=this.props.detail
        return(
            <div className={['ProductInfo',(info.type===2)?'reverse':null].join(' ')} >
                <div className="fontpart">
                    <div className="font">
                        <p className="toptitle">{info.title}</p>
                        <p className="bottitle">{info.content}</p>
                    </div>
                </div>
                <div className="imgpart">
                    <img src={info.imgsrc} alt='木卫六跑步机' />
                </div>
            </div>
        )
    }
}
export default ProductInfo;