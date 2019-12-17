import React from 'react'
import './SecondTab.scss'

class SecondTab extends React.Component{
    render(h) {
        const tabs=this.props.tab.map((item,index)=>
            <a className="tab" href={'#'+item.anchor} key={index}>{item.name}</a>
        )
        return(
            <div className='secondetab'>
                {tabs}
            </div>
        )
    }
}
export default SecondTab;