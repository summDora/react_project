import React from 'react';
import './Footer.scss'
class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      friendlink:[
        {
          name:'百度',
          address:'http://www.baidu.com',
        },
        {
          name:'新浪',
          address:'http://www.sina.com.cn',
        },
      ],
      footpart:[
        {
          title:'在线购买',
          detail:[
            {
              name:'京东旗舰店',
              address:'',
            },
            {
              name:'官方零售店',
              address:'',
            },
          ],
        },
        {
          title:'快捷导航',
          detail:[
            {
              name:'新闻报道',
              address:'',
            },
            {
              name:'网站地图',
              address:'',
            },
          ],
        },
        {
          title:'关于我们',
          detail:[
            {
              name:'品牌故事',
              address:'',
            },
            {
              name:'团队介绍',
              address:'',
            },
            {
              name:'联系我们',
              address:'',
            },
          ],
        },
        {
          title:'网站条款',
          detail:[
            {
              name:'隐私条款',
              address:'',
            },
          ],
        },
      ],
    }
  }
  
  render(){
    const friendLinkList=this.state.friendlink.map((item,index)=>
      <a href={item.address} target='_blank'  rel="nofollow me noopener noreferrer" key={index}>{item.name}</a>
    )
    const footList=this.state.footpart.map((item,index)=>{
      const listList=item.detail.map((i,point)=>{
        return (
          <ul key={point}>
            <li>
              <a href={i.address} target="_blank" rel="nofollow me noopener noreferrer" className="footlink">
                {i.name}
              </a>
            </li>
          </ul> 
        )
      })
      return(
        <div className='part' key={index}>
            <p className="title">{item.title}</p>
            {listList}
        </div>
      )
    })
    return (
      <div className="Footer">
        <p className='friend'>
          友情链接：{friendLinkList}
        </p>
        <div className="content">
          {footList}
          <div className='part'>
            <p className="title">下载APP</p>
            <img src={require('./../../assets/images/appdownload.png')} alt='download app' />
          </div>

          <div className="right">
            <p className="number">0571-86902312</p>
            <p className="time">周一至周五 10:00-19:00</p>
          </div>
        </div>
        
      </div>
    );
  }
    
  }
  
  export default Footer;