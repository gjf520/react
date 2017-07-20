import React from 'react';
import HeaderComponent from '../common/header.js';
import ContentComponent from '../detail/content.js';
import FooterComponent from '../common/footer.js';
import CommentComponent from './comment.js';
export default class DetailComponent extends React.Component{

	render(){
		return(
		<div>
			<HeaderComponent/>
			<ContentComponent id={this.props.params.id}/>
			<CommentComponent/>
			
			<FooterComponent/>
		</div>
		)
	}
}
