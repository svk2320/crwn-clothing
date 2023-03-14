import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/user.contexts";
import { CartContext } from "../../../contexts/cart.context";

import { signOutUser } from "../../../services/firebase/firebase.services";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () =>{
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
              SHOP
          </NavLink>
          <NavLink to="/contacts">
              CONTACTS
          </NavLink>
          {
            currentUser ? 
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> : 
            <NavLink to="/auth">SIGN IN</NavLink>
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation