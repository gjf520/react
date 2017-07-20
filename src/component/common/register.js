import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col,Menu,Icon,Button, Modal,Tabs,Form,Checkbox,Input,notification } from 'antd';
const MenuItem =Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class RegisterComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		
		}
	}

	render(){
		const { getFieldDecorator } = this.props.form;
		 
		return(
				<div>
			    <Form onSubmit={this.handleSubmit}>

			    	 <FormItem
			          label={(
			            <span>
			              Nickname&nbsp;
			            </span>
			          )}
			          hasFeedback
			        >
			          {getFieldDecorator('nickname', {
			            rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
			          })(
			            <Input />
			          )}
			        </FormItem>


			        <FormItem
			          label="Password"
			          hasFeedback
			        >
			          {getFieldDecorator('password', {
			            rules: [{
			              required: true, message: '请输入密码!',
			            }, {
			              validator: this.checkConfirm,
			            }],
			          })(
			            <Input type="password" />
			          )}
			        </FormItem>

			        <FormItem
			          label="Confirm Password"
			          hasFeedback
			        >
			          {getFieldDecorator('confirm', {
			            rules: [{
			              required: true, message: '请再次输入密码!',
			            }, {
			              validator: this.checkPassword,
			            }],
			          })(
			            <Input type="password" onBlur={this.handleConfirmBlur} />
			          )}
			        </FormItem>
			        <FormItem  style={{ marginBottom: 8 }}>
			          {getFieldDecorator('agreement', {
			            valuePropName: 'checked',
			          })(
			            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
			          )}
			        </FormItem>
			        <FormItem>
			          <Button type="primary" htmlType="submit" size="large">Register</Button>
			        </FormItem>
			      </Form>
				</div>
			)
	}

}

export default Form.create()(RegisterComponent);














