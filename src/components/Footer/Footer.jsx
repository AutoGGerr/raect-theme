import './style.scss'

import logoSvg from '../../assets/icons/main/logo.svg'
import arrowUp from '../../assets/icons/main/get_arow_green.svg'
import facebook from '../../assets/icons/social-network/facebook.svg'
import linkedIn from '../../assets/icons/social-network/linkedIn.svg'
import twitter from '../../assets/icons/social-network/twitter.svg'
import youtube from '../../assets/icons/social-network/youtube.svg'


const Footer = () => {
    return(
        <footer className="footer">
            <div className='footer__content'>
                <div className="footer__up">
                    <div className='footer__feedback'>
                        <img src={logoSvg} alt="" className='footer__logo'/>
                        <div className="footer__form">
                            <input type="email" className='footer__form-input' placeholder='email@smartnote.io'/>
                            <img src={arrowUp} alt="" className='footer__form-img' style={{cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <div className="footer__nav-item">
                            <h4 className='footer__nav-title'>Product</h4>
                            <ul className='footer__nav-ul'>
                                <li><a href="#" className='footer__nav-link'>About</a></li>
                                <li><a href="#" className='footer__nav-link'>Features</a></li>
                                <li><a href="#" className='footer__nav-link'>Pricing</a></li>
                                <li><a href="#" className='footer__nav-link'>Integrations</a></li>
                                <li><a href="#" className='footer__nav-link'>FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer__nav-item">
                            <h4 className='footer__nav-title'>Company</h4>
                            <ul className='footer__nav-ul'>
                                <li><a href="#" className='footer__nav-link'>Our Story</a></li>
                                <li><a href="#" className='footer__nav-link'>Team</a></li>
                                <li><a href="#" className='footer__nav-link'>Careers</a></li>
                                <li><a href="#" className='footer__nav-link'>Press</a></li>
                                <li><a href="#" className='footer__nav-link'>Contact Us</a></li>
                            </ul>
                            
                        </div>
                        <div className="footer__nav-item">
                            <h4 className='footer__nav-title'>Resources</h4>
                            <ul className='footer__nav-ul'>
                                <li><a href="#" className='footer__nav-link'>Blog</a></li>
                                <li><a href="#" className='footer__nav-link'>Webinars</a></li>
                                <li><a href="#" className='footer__nav-link'>Case Studies</a></li>
                                <li><a href="#" className='footer__nav-link'>Templates</a></li>
                                <li><a href="#" className='footer__nav-link'>Help Center</a></li>
                            </ul>
                        </div>
                        <div className="footer__nav-item">
                            <h4 className='footer__nav-title'>Legal</h4>
                            <ul className='footer__nav-ul'>
                                <li><a href="#" className='footer__nav-link'>Terms of Service</a></li>
                                <li><a href="#" className='footer__nav-link'>Privacy Policy</a></li>
                                <li><a href="#" className='footer__nav-link'>Cookie Policy</a></li>
                                <li><a href="#" className='footer__nav-link'>Acceptable Use</a></li>
                                <li><a href="#" className='footer__nav-link'>Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-content">
                    <p className='footer__bottom-contact'>@2024 SmartNotesI. All Rights Reserved. @iamhervewabo</p>
                    <div className='footer__social'>
                        <a href=""><img src={facebook} alt="" className='footer__social-item'/></a>
                        <a href=""><img src={linkedIn} alt="" className='footer__social-item'/></a>
                        <a href=""><img src={twitter} alt="" className='footer__social-item'/></a>
                        <a href=""><img src={youtube} alt="" className='footer__social-item'/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;