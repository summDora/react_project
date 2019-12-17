import React from 'react'
import './ProductDetail.scss'
class ProductDetail extends React.Component{
    render(h) {
        const detail=this.props.detail
        return(
            <div className='ProductDetail' style={{backgroundImage:'url('+detail.imgsrc+')'}}>
                <div className={['part',(detail.position==='left')?'left':'right'].join(' ')}>
                    <p className="toptitle">{detail.toptitle}</p>
                    <p className="bottitle">{detail.bottitle}</p>
                    <div className="content">{detail.content}</div>
                </div>
            </div>
        )
    }
}
export default ProductDetail;