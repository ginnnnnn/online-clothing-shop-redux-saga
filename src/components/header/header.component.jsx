import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, cartDropdownHidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()} >SIGN OUT</OptionLink> :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {!cartDropdownHidden ? <CartDropdown /> : null}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartDropdownHidden
})




export default connect(mapStateToProps)(Header);

//when importing SVG in React. The ReactComponent import name is special 
//and tells Create React App that you want a React component that renders an SVG,
// rather than its filename.

//auth.signOut() ,firebase.auth().signOut(); firebase signOut function

//mapStateToProps(state) return an obj as props, state = root-reducer whitch return a obj
//{user:userReducer,...} 