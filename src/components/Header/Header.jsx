import './style.scss'

import logo from '../../assets/icons/main/logo.svg'
import Button from '../Button/Button';
const Header = () => {
    return(
        <main className='header'>
            <div className="header__content">
                <img src={logo} alt="" />
                <nav className="header__nav">
                    <p className='header__nav-item'>Features</p>
                    <p className='header__nav-item'>Pricing</p>
                    <p className='header__nav-item'>Support</p>
                </nav>
                <Button>Get Started</Button>
            </div>
        </main>
    )
}

export default Header;