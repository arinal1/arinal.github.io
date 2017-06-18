import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';
import './css/myStyle.css';

class Frame extends React.Component {
	render(){
		return(
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Frame />,	
    document.getElementById('container')
  );
})