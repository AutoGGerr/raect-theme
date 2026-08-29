import './style.scss'

import Title from '../Title/Title'
const Price = (props) => {
    return(
        <div className='price'>
            <Title
                desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            >
                <span>Pricing</span> & Plans
            </Title>
        </div>
    )
}

export default Price;