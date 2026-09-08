import './style.scss'

import arrow from '../../assets/icons/main/get_arow_grey.svg'

const Button = ({children, ...props}) => {
    const {
        title,
        color,
        className,
    } = props

    const hasColor = color == 'white'

    return(
        <div className={`button ${className}`} style={{background: hasColor ? '#EFECE6' : 'linear-gradient(90deg, #017373, #AAD9D1)'}}>
            <p className='button__title'>{children}</p>
            <img src={arrow} alt="arrow"/>
        </div>
    )
    
}

export default Button;