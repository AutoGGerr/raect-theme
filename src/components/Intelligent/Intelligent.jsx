import './style.scss'

import headerImage from '../../assets/images/header-figure.png'
import Button from '../Button/Button';

const Intelligent = () => {
    return(
        <div className='intelligent'>
            <div className="intelligent__row">
                <div>
                    <h1 className='intelligent__title'><span>Intelligent</span> cloud-based <br/><span>note-taking</span> and <br/> collaboration tool</h1>
                    <p className='intelligent__desc'>Experience the power of smart note-taking and transform the way you work today.</p>
                </div>
                <div className='intelligent__form'>
                    <input type="email" className='intelligent__form-input' placeholder='Enter your email'/>
                    <Button>Sign up</Button>
                </div>

            </div>
            <img src={headerImage} alt="" />
        </div>
    )
}

export default Intelligent;