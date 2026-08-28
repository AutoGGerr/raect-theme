import './style.scss'

import arrow from '../../assets/icons/main/get_arow_grey.svg'

const Button = ({children, ...props}) => {
    const {
        title
    } = props

    return(
        <div className="button">
            <p className='button__title'>{children}</p>
            <img src={arrow} alt="arrow" />
        </div>
    )
}

export default Button;