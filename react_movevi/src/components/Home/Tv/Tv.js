import React from 'react'
import './Tv.scss'
class Tv extends React.Component{
    render(h) {
        return(
            <div className='tv'>
                <img src={this.props.imgsrc} className="top" alt="" />
                <img src={this.props.tvsrc} className="bot" alt="" />
            </div>
        )
    }
}
export default Tv;