import React from 'react';
import './Firstscreen.css'
class Firstscreen extends React.Component{
    /* constructor(props){
        super(props);
    } */
  render(){
    return(
      <div className='Firstscreen'  style={{backgroundImage:"url("+this.props.imgsrc+")"}}>
        <p className="hightitle">{this.props.highTitle}</p>
        <p className="lowertitle">{this.props.lowerTitle}</p>
      </div>
    )
  }
}
export default Firstscreen;