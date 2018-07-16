import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper } from './style';
import Header from '../Header/Header';
import {throttle} from 'lodash';

class Container extends Component {
	constructor () {
		super();
		this.state = {
			width: window.innerWidth
		};
	}

	componentDidMount () {
		window.addEventListener('resize', this.handleWindowSizeChange);
		this.setState({width: window.innerWidth});
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = throttle(() => {
		this.setState({ width: window.innerWidth });
	}, 200);

	render () {
		const { width } = this.state;
		const smallScreen = width < 768;
		return (
			<ContainerWrapper>
				<Header smallScreen={smallScreen}/>
			</ContainerWrapper>
		);
	}
}

export default Container;
