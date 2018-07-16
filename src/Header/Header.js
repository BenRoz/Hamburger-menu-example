import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, Logo, LogoImg, HeaderMenu, MenuItem } from './style';
import { slide as HamburgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

var styles = {
	bmBurgerButton: {
		position: 'absolute',
		width: '36px',
		height: '30px',
		right: '15px',
		top: '15px'
	},
	bmBurgerBars: {
		background: '#666666'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenu: {
		background: '#EFEFEF',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em',
		overflow: 'hidden'

	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0 0.8em',
		display: 'grid',
		gridTemplateRows: 'repeat(5, 50px)'
	},
	bmItem: {
		display: 'inline-block'
	},
	a: {
		textDecoration: 'none',
		color: 'inherit'

	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	},
	bmMenuWrap: {
		top: '0',
		width: '45%'
	}
};

class Header extends Component {
	constructor () {
		super();
		this.state = {
			isMyMenuOpen: true
		};
		this.closeMenu = this.closeMenu.bind(this);
	}

	componentDidMount () {
		document.addEventListener('click', this.handleClickOutside);
	}
	componentWillUnmount () {
		document.addEventListener('click', this.handleClickOutside);
	}

	handleClickOutside = e => {
		if (this.state.isMyMenuOpen === true) {
			return;
		}
		const node = ReactDOM.findDOMNode(this);
		let target = e.target;

		while (target && target.parentNode) {
			if (target === node) {
				return;
			}

			target = target.parentNode;
		}

		this.setState({isMyMenuOpen: true});
	};

	isMenuOpen = (state) => {
		console.log('state', state);
		if (state.isOpen === this.state.isMyMenuOpen) return;
		this.setState({isMyMenuOpen: state.isOpen});
	}

	closeMenu () {
		if (this.props.smallScreen) {
			this.setState({isMyMenuOpen: true});
		}
	}

	render () {
		const { smallScreen } = this.props;
		const MenuItems = [
		  <MenuItem className ='bbb' key='Tour' onClick={this.closeMenu}><Link to='/signin'>Tour</Link></MenuItem>,
			<MenuItem key='About'onClick={this.closeMenu}><Link to='/signin'>About</Link></MenuItem>,
			<MenuItem key='Contact' onClick={this.closeMenu}><Link to='/signin'>Contact</Link></MenuItem>,
			<MenuItem key='Blog' onClick={this.closeMenu}><Link to='/signin'>Blog</Link></MenuItem>,
			<MenuItem key='Signin' onClick={this.closeMenu}><Link to='/signin'>Signin</Link></MenuItem>,
			<MenuItem key='Signup' onClick={this.closeMenu}><Link to='/signin'>Signup</Link></MenuItem>];

		return (
			<HeaderWrapper>
				<Logo smallScreen={smallScreen || null}><Link to='/'><LogoImg/></Link></Logo>
				{smallScreen ? (<HamburgerMenu isOpen={ this.state.isMyMenuOpen } onStateChange={ this.isMenuOpen } styles={ styles }>
					{MenuItems}
				</HamburgerMenu>) : (<HeaderMenu>
					{MenuItems}
				</HeaderMenu>)}
			</HeaderWrapper>);
	}
}

Header.propTypes = {
	smallScreen: PropTypes.bool
};
export default Header;
