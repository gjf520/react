import React from "react";
import { Pagination } from 'antd';
export default  class ContentComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	componentDidMount(){
		var id=this.props.id
		fetch('/mock/article.json?id='+id).then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				title:json.data.title,
				content:json.data.content,
				time:json.data.time,
				count:json.data.count,
				mp3:json.data.mp3,
			})
			// console.log(json);
		})

	}

	 render(){
	 	return (
	 			<div className="detailContent">
		 			<h1 className="h-title">{this.state.title}</h1>
		 			
		 			<p className="time">时间：{this.state.time} <audio controls src={this.state.mp3} className="content-mp3"></audio></p>
		 			<div className="detail_content"><img src="images/1.jpg"/><p dangerouslySetInnerHTML={{__html:this.state.content}} ></p></div>
		 			<div className="detail_content1"><p dangerouslySetInnerHTML={{__html:this.state.content}} ></p><img src="images/2.jpg"/></div>
		 			<Pagination defaultCurrent={6} total={500}  className="page"/>
		 			<img src="images/8.jpg" className="img"/>
	 			</div>




	 			)
	 }
}