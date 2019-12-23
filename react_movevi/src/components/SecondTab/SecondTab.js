import React from 'react'
import './SecondTab.scss'

class SecondTab extends React.Component{
    componentDidMount() {
        let top=this.gettop.offsetTop;
        console.log('componentDidMount',top);
    }
    render(h) {
        const tabs=this.props.tab.map((item,index)=>
            <a className="tab" href={'#'+item.anchor} key={index}>{item.name}</a>
        )
        return(
            <div className='secondetab' ref={(r)=>{this.gettop = r}}>
                {tabs}
            </div>
        )
    }
}
export default SecondTab;