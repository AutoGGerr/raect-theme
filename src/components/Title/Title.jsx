import './style.scss'

const Title = ({children, ...props}) => {
    const {
        className,
        desc
    } = props

    return(
        <div className={`title ${className}`}>
            <h1 className='title__text'>{children}</h1>
            <p className='title__desc'>{desc}</p>
        </div>
    )
}

export default Title;