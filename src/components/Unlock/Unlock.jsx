import './style.scss'

import Title from '../Title/Title'
import Button from '../Button/Button'

import bgImage from '../../assets/images/footer-figure.png'

const Unlock = () => {
    return(
        <div className='unlock'>
            <div className='unlock__block'>
                <Title
                    desc="Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking."
                    className="unlock__title"
                >
                    Unlock the Full <br/> Potential of <br/><span>SmartNotes</span>
                </Title>
                <Button
                    className="unlock__button"
                    color="black"
                >Sign Up for Free</Button>
            </div>
            <img src={bgImage} alt="" />
        </div>
    )
}

export default Unlock;