import './style.scss'

import arrowSvg from '../../assets/icons/pricecard-icon/path.svg'

import Button from '../Button/Button'

const PriceCard = (props) => {
    const {
        template,
        priceTitle,
        priceMonth,
        priceYear,
        favoritesData,
        priceIcon,
        accentColor
    } = props

    let hasCustom = false;
    let hasColor = Boolean;
    let hasTemplate = Boolean;

    if(priceMonth == 'Custom'){
        hasCustom = true
    } 

    if(accentColor == 'white'){
        hasColor = true
    } else if (accentColor == 'black'){
        hasColor = false
    }

    return(
        <div className={`pricelist`} style={{
            backgroundColor: hasColor ? '#F7F7F7' : '#080808'
        }}>
            <div className='pricelist__ind'>
                <img src={priceIcon} alt="" className='pricelist__ind-svg'/>
                <h5 className='pricelist__ind-title'>{priceTitle}</h5>
            </div>
            <div className="pricelist__price">
                <h4 className='pricelist__price-tilte' style={{color: hasColor ? '#080808' : '#F7F7F7'}}>
                    {template ? priceYear : priceMonth} 
                <span style={{color: hasColor ? '#333333' : '#048C80'}}>
                    {hasCustom ? '' : template ? '/year' : '/month'}
                </span></h4>
            </div>
            <div className="pricelist__favorites">
                {favoritesData.map((item, index) => {
                    return <article className='pricelist__favorites-block'>
                                <img src={arrowSvg} alt="" />
                                <p className='pricelist__favorites-item' style={{color: hasColor ? '#333333' : '#BABABA'}}>{item}</p>
                            </article>
                })}
            </div>
            <div className='pricelist__button'>
                <Button 
                    color={hasColor ? 'white' : 'black'}
                    className="pricelist__button-item"
                >
                    Start Free Trial
                </Button>
                <p className="pricelist__button-text">{hasCustom ? '' : 'No credit card required'}</p>
            </div>
            
            
        </div>
    )
}

export default PriceCard;