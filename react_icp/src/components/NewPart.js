import React, { Component } from 'react'

export default class NewPart extends Component {
    render() {
        const info = this.props.info
        return (
            <div className='NewPart'>
                <div className="leftdate">
                    <span className="month">{info.month}</span>
                    <span className="day">{info.day}</span>
                </div>
                <div className="rightnews">
                    <p className="newstitle">{info.title}</p>
                    <div className="newscontent">{info.newsconent}</div>
                </div>
            </div>
        )
    }
}
