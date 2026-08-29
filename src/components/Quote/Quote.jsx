import './style.scss'

const Quote = (props) => {
    const {
        quoteTitle,
        author,
        className
    } = props

    return(
        <article className={`quote ${className}`}>
            <h3 className='quote__title'>{quoteTitle}</h3>
            <div>
                <p className='quote__author'>{author}</p>
                <p className='quote__event'>TechSavvy Solutions</p>
            </div>
        </article>
    )
}

export default Quote;