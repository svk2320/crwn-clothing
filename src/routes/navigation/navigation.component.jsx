import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../services/firebase/firebase.services";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () =>{
  const currentUser = useSelector(selectCurrentUser);
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