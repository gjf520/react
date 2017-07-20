import React from 'react';
import { Row, Col,Menu,Icon,Button,SubMenu, Modal,Tabs,Form,Checkbox,Input,notification,Card } from 'antd';
const MenuItem =Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

import LoginComponent from './login.js';
import RegisterComponent from './register.js';
 class HeaderComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			categoryItems:[],
			isLogin:false,
			showModal:false,
			selectKey:[]
		}
	}
	componentDidMount(){
		fetch('/mock/category.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				selectKey:["category_"+json.data.categories[0].category_id],
				categoryItems:json.data.categories
			})
		});
	}
	
	componentDidMount(){
		fetch('/mock/nav.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				selectKey:["category_"+json.data.categories[0].category_id],
				categoryItems:json.data.categories
			})
		});
	}
	handleCategorySelect(events){
		this.setState({
			selectKey:[events.key]
		})
	}

	handeleLoginClick() {
		this.setState({
			showModal: true
		})
	}
	handleCancelClick(){
		this.setState({
		showModal: false
		})
	}


	render(){
		 var loginArea;
			if(this.state.isLogin){
				loginArea=<div><Button type="primary"  className="log-reg-btn" >注销</Button></div>
			}else{
				loginArea=<Button type="primary" onClick={this.handeleLoginClick.bind(this)} className="log-reg-btn" >登录/注册</Button>
			}
		return(
				<div> 
					<Row>
				      <Col span={4} className="logo">
				      		<img src="images/logo2.gif" className="logo"/>
				      </Col>
				      <Col span={15}>
				      		<Menu mode="horizontal" className="Category-menu" selectedKeys={this.state.selectKey} onSelect={this.handleCategorySelect.bind(this)}>
						    {
						    	this.state.categoryItems.map((value,index)=>{
						    		return <MenuItem  key={'category_'+value.category_id}><Icon type={value.icon}/>{value.category_name}</MenuItem>
						    	})
						    }
							</Menu>
				      </Col>
				      <Col span={5}>
				      		{loginArea}
				      </Col>
				    </Row>
			    	<Modal title="登录/注册" visible={this.state.showModal} footer={null} onCancel={this.handleCancelClick.bind(this)}>
				         <Tabs defaultActiveKey="login">
						    <TabPane tab="登录" key="login">
						    	<LoginComponent/>
						    </TabPane>

						    <TabPane tab="注册" key="register">
						    	<RegisterComponent/>
						    </TabPane>
							</Tabs>


			        </Modal>


			       	 <Row className="nav">
				      <Col span={3}>
				        <Card title="常速英语" bordered={true}>
				        	<div className="nav-title">
							  <p>音频</p>
							  <p>视频</p>
							  <p>翻译</p>
							</div>

				        </Card>
				      </Col>
				      <Col span={10}>
				        <Card title="慢速英语（中级）" bordered={true}>
				        	{
								    	this.state.categoryItems.map((value,index)=>{
								    		return <p  className="nav-content" key={'category_'+value.category_id}>{value.category_name}</p>
								    	})
							}

				        </Card>
				      </Col>
				      <Col span={11}>
				        <Card title="英语教学（初级）" bordered={true}>
				        	{
								    	this.state.categoryItems.map((value,index)=>{
								    		return <p  className="nav-content" key={'category_'+value.category_id}>{value.category_name}</p>
								    	})
							}


				        </Card>
				      </Col>
					</Row>


					
			        
				 	
				 </div>

			)
	}
}
export default Form.create()(HeaderComponent);
