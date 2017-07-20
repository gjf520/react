import React from 'react';
import HeaderComponent from '../common/header.js';
import ContentComponent from '../common/content.js';
import FooterComponent from '../common/footer.js';
export default class IndexComponent extends React.Component{
	render(){
		return(
		<div> 
			<HeaderComponent/>
			<ContentComponent/>
			<FooterComponent/>
		</div>
		)
	}
}

