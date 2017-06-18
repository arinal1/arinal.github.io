import $ from 'jquery';
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      navKey:'#home'
    	};
    	this.handleSelect = this.handleSelect.bind(this);
    	this.scrollHandler = this.scrollHandler.bind(this);
    }
    scrollHandler(){
    	const about = $('#about').offset().top;
	    const services = $('#services').offset().top;
	    const clients = $('#clients').offset().top;
	    const a = $('#a').offset().top;
	    const contact = $('#contact').offset().top;

    	$(window).scroll(() => {
    		if ($(".navbar").offset().top > 50) {
		        $(".navbar-fixed-top").addClass("scrolled-nav");
		    } else {
		        $(".navbar-fixed-top").removeClass("scrolled-nav");
		    };   
		    if($(".navbar").offset().top + 50 < about) {
		    	this.setState({
					navKey:'#home'
				});
		    };
		    if ($(".navbar").offset().top + 50 >= about) {
				this.setState({
					navKey:'#about'
				});
		    };
		    if($(".navbar").offset().top + 50 >= services) {
		    	this.setState({
					navKey:'#services'
				});
			};
			if($(".navbar").offset().top + 50 >= clients) {
		    	this.setState({
					navKey:'#clients'
				});
			};
			if($(".navbar").offset().top + 50 >= a) {
		    	this.setState({
					navKey:'#a'
				});
		    };
		    if($(".navbar").offset().top + 50 >= contact) {
		    	this.setState({
					navKey:'#contact'
				});
		    };
    	});
    }
	handleSelect(key){
		var page = key;
		this.setState({
			navKey:page
		});
		var topPosition = $(page).offset().top;
        $('html, body').stop().animate({
        	scrollTop: topPosition - 50
        }, 1500);
	}
	render() {
		return(
			<div className="header">
				<Navbar bsStyle="MBA" fixedTop={true}>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">MBA Management</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav activeKey={this.state.navKey} pullRight={true} onSelect={this.handleSelect}>
						<NavItem eventKey='#home' href="#home">Home</NavItem>
						<NavItem eventKey='#about' href="#about">About</NavItem>
						<NavItem eventKey='#services' href="#services">Services</NavItem>
						<NavItem eventKey='#clients' href="#clients">Clients</NavItem>
						<NavItem eventKey='#a' href="#a">a</NavItem>
						<NavItem eventKey='#contact' href="#contact">Contact</NavItem>
					</Nav>
				</Navbar>
			</div>
		)
	}
	componentDidMount(){
		this.scrollHandler();
	}
}