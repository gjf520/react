import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col,Menu,Icon,Button, Modal,Tabs,Form,Checkbox,Input,notification } from 'antd';
const MenuItem =Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class LoginComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			isLogin:false,
		}
	}

	handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var link="?username="+values.username+"&password="+values.password;
        fetch('/mock/login.json'+link).then((response)=>{
			return response.json();
		}).then((json)=>{
				if(json.data.login){
					this.setState({
						showModal:false,
						isLogin:true
					})
					try{
						window.localStorage.login=true;
					}catch(e){}
				}else{
					notification.open({
				    message: '小主,输入有误！',
				    description: '请再来一次吧',
				  });
				};
			});
		}
     });
}

	render(){
		const { getFieldDecorator } = this.props.form;
		 
		return(
			<div>
	    	<Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
		        <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: '请输入用户名!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请输入密码!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>记住密码</Checkbox>
		          )}
		          <a className="login-form-forgot" href="">忘记密码</a>
		          <Button type="primary" htmlType="submit"  className="login-form-button">
		            登录
		          </Button>
		        </FormItem>
		    </Form>
		    </div>

			)
	}

}

export default Form.create()(LoginComponent);













