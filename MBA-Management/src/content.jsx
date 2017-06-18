import $ from 'jquery';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Content extends React.Component {
	render() {
		return(
			<div className="content">
				<div id="home" className="home-wrapper">
					<div className="home">
						<div className="slogan-wrapper">
							<div className="slogan">
								<h1>MBA Management</h1>

							</div>
						</div>
					</div>
				</div>
				<div id="about" className="about-wrapper">
					<Grid>
						<Row>
							<Col md={4}>
								gambar
							</Col>
							<Col md={8}>
								lorem ipsum dolor sit amet
							</Col>
						</Row>
					</Grid>
				</div>
				<div id="services" className="services-wrapper"><h1>Services</h1></div>
				<div id="clients" className="clients-wrapper"><h1>Clients</h1></div>
				<div id="a" className="a-wrapper"><h1>A</h1></div>
			</div>
		);
	}
}