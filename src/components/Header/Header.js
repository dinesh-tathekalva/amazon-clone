import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [state, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo'
          alt="amazon"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>

        <div className='header__option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>&Orders</span>
        </div>

        <div className='header__option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            {state ? 
            
            <span className='header_optionLineTwo header__basketCount'>{state.basket?.length}</span>:  <span className='header_optionLineTwo header__basketCount'>0</span>
          }
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
