import React from 'react';
import { Layout } from 'antd';
import { Row, Col,Menu,Icon,BackTop} from 'antd';
const {Footer} = Layout;
const MenuItem =Menu.Item;
export default class FootertComponent extends React.Component{

	constructor(props){
		super(props);
		this.state={
			categoryItems:[],
			selectKey:[]
		}
	}
	componentDidMount(){
		fetch('/mock/friend.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				selectKey:["category_"+json.data.categories[0].category_id],
				categoryItems:json.data.categories
			})
		});
	}
	render(){ 
		return(
				<div id="ft">
					<div className="friend">
						<div className="f">友 情 链 接 </div> 
						<Row>
					      <Col span={24}>
					      	<Menu mode="horizontal" className="Category-menu-footer" >
						    {
						    	this.state.categoryItems.map((value,index)=>{
						    		return <MenuItem  key={'category_'+value.category_id}>{value.category_name}</MenuItem>
						    	})
						    }
							</Menu>

							<div className="goodfriend">
								<img src="images/j1.jpg"/>
								<img src="images/j2.jpg"/>
								<img src="images/j3.jpg"/>
								<img src="images/j4.jpg"/>
							</div>
							

							
					      </Col>
					      
					    </Row>
					</div>
				
					<Footer style={{ textAlign: 'center' , border:'1px solid #d8e1e2'}}>
		            	<p>本网站有 <a href="">EaayVOA</a> 开发上线 &copy; 2011-2014 手机版 <a href="">EaayVOA</a></p><br/>
		            	<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
		            	<p><img src="images/icon.gif" /></p>
		            </Footer>
		            <BackTop>
				      <div className="ant-back-top-inner"><img src="images/top.gif"/></div>
				    </BackTop>
				    Scroll down to see the bottom-right
				    <strong style={{ color: '#1088e9' }}> blue </strong>
				</div>
			)
	}
}
		







