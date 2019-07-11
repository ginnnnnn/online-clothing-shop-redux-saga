import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, cartDropdownHidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div> :
                        <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!cartDropdownHidden ? <CartDropdown /> : null}
        </div>
    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { cartDropdownHidden } }) => ({
    currentUser,
    cartDropdownHidden
})




export default connect(mapStateToProps)(Header);

//when importing SVG in React. The ReactComponent import name is special 
//and tells Create React App that you want a React component that renders an SVG,
// rather than its filename.

//auth.signOut() ,firebase.auth().signOut(); firebase signOut function

//mapStateToProps(state) return an obj as props, state = root-reducer whitch return a obj
//{user:userReducer,...} 