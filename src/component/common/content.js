import React from 'react';
import { Row, Col,Menu,Icon,Button,SubMenu, Modal,Tabs,Form,Checkbox,Input,notification,Card,BackTop,Timeline} from 'antd';
import { Carousel } from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
export default class ContentComponent extends React.Component{
	constructor(props){
			super(props);
			this.state={
				articles:[],
				categoryItems:[],
				teacher:[]

			}
		}
	componentDidMount(){
			fetch('/mock/articles.json').then((response)=>{
				return response.json();	
			}).then((json)=>{
				this.setState({
					articles:json.data.articles
				})
				
			})

			fetch('/mock/teacher.json').then((response)=>{
				return response.json();	
			}).then((json)=>{
				this.setState({
					teacher:json.data.teacher
				})
				
			})
		}
	
	handleClickDisplay(){

		$(".h-img").css({
			display:"none"
		})
		setInterval(function(){
			$(".h-img").css({
				display:"block"
			})
		},5000)
	}

	handleBtnClick() {
		window.location.href = "https://game.zixia.com/g/frxz2/07073frxz2507";
	}


	render(){
		
		return(

		<div className="index-content"> 
			  <Carousel autoplay>
				    <div><img src="images/8.png"/></div>
				    <div><img src="images/5.jpg"/></div> 
				    <div><img src="images/6.jpg"/></div>
				    <div><img src="images/7.png"/></div>
				    <div><img src="images/9.png"/></div>
			  </Carousel> 


			 <Card title="VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。"  style={{ width: 1024 }}>
			    {
			    	this.state.articles.map((value,index)=>{

			    		return (
			    			<Link key={index+'_article'} to={"/detail/" + value.articles_id}>
				    		<p  className="title" > 
				    		<span className="article-item-category">[{value.category_title}]</span>
					    		{value.title}
					    		{
					    			value.is_new?<span className="article-item-new">new</span>:''
					    			
					    		}
				    		</p>


				    		</Link>
			    		)
			    	})
			    }
			  </Card>


			  <div className="h-img"  > <img src="images/timg.gif" onClick = {this.handleBtnClick.bind(this)}/>
			  <span onClick={this.handleClickDisplay.bind(this)}>X</span></div>
			  <div className="t-title">名 师 风 采</div>
			  <div className="t-border">
					    <img src="images/t1.jpg"/>
					    <img src="images/t2.jpg"/>
					    <img src="images/t4.jpg"/>
					    <img src="images/t3.jpg"/>
					    <img src="images/t5.jpg"/>

					  <Tabs defaultActiveKey="0" className="tab">

					  	{
							  this.state.teacher.map((value,index)=>{
							  	return(

							  			<TabPane  tab={value.title} key={index}>
							  				<div className="t-content">
							  				<h2>{value.name}</h2>
							  				<p>所授课程：《{value.course}》</p>
							  				<p>座右铭：{value.motto}</p>
							  				<p>教学风格：{value.teaching}</p>
							  				</div>
							  			</TabPane>
							  		)
					         })
						 }
					</Tabs>

					<div id="study">
					<p>最新口语秀</p>
					<Timeline className="line">
					    <Timeline.Item><a href="http://ting.kekenet.com/tx/399168">经典英文电影对白 第66期:杀死</a></Timeline.Item>
					    <Timeline.Item><a href="http://show.kekenet.com/plus/work.php?aid=95708">VOA常速新闻附字幕:中国出动军</a></Timeline.Item>
					    <Timeline.Item><a href="http://show.kekenet.com/plus/work.php?aid=90983">那些给我勇气的双语美文 第34期</a></Timeline.Item>
					    <Timeline.Item><a href="http://show.kekenet.com/plus/work.php?aid=90900">看电影学英语《冰雪奇缘》第1期：</a></Timeline.Item>
					    <Timeline.Item><a href="http://ting.kekenet.com/tx/399018">神探夏洛克第2季(MP3+中英字</a></Timeline.Item>
					</Timeline>
					 <a href="http://englishvip.com/keke/index.html?114"><img src="images/tom.gif"/></a>
					</div>

			    
			 </div>

		</div>


		)
	 
		
	}
}

