import './style.scss'
import { use, useState } from 'react'

import firstSvg from '../../assets/icons/pricecard-icon/star.svg'
import secondSvg from '../../assets/icons/pricecard-icon/round.svg'
import thirdSvg from '../../assets/icons/pricecard-icon/swim.svg'

import Title from '../Title/Title'
import PriceCard from '../PriceCard/PriceCard';

const Price = (props) => {
    const firstFavoritesData = [
        "Real-time collaboration",
        "AI-powered organization",
        "Customizable templates",
        "5GB cloud storage",
        "Basic integrations"
    ]
    const secondFavoritesData = [
        "Everything in the Individual Plan",
        "Unlimited cloud storage",
        "Advanced integrations",
        "Team management and permissions",
        "Shared templates and note libraries"
    ]
    const thirdFavoritesData = [
        "Everything in the Team Plan",
        "Dedicated account manager",
        "Enterprise-grade security",
        "Customized onboarding",
        "Advanced analytics"
    ]

    const [template, setTemplate] = useState(false)
    const toggleTemplate = () => {
        setTemplate(prev => !prev)
    }
    return(
        <div className='price'>
            <Title
                desc="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
            >
                <span>Pricing</span> & Plans
            </Title>
            <div className="price__radio">
                <h4 className='price__radio-title' style={{
                    color: template ? '#BABABA' : '#EFECE6'
                }}>Monthly</h4>
                <div className='price__radio-item' onClick={toggleTemplate} style={{opacity: template ? '1' : '0.8'}}>
                    <span className='price__radio-span' style={{
                       left: template ? '39px' : '6px',
                }}></span>
                </div>
                <h4 className='price__radio-title' style={{
                    color: template ? '#EFECE6' : '#BABABA'
                }}>Yearly</h4>
                <p className='price__radio-sale'>Save 25%</p>
            </div>
            <div className='price__list'>
                <div className="price__item">
                    <PriceCard 
                        priceTitle="Individual Plan"
                        priceMonth="$9.99"
                        priceYear="$119,88"
                        favoritesData={firstFavoritesData}
                        priceIcon={firstSvg}
                        accentColor="white"
                        template={template}
                    />
                </div>
                <div className="price__item">
                    <PriceCard 
                        priceTitle="Team Plan"
                        priceMonth="$19.99"
                        priceYear="$155,88"
                        favoritesData={secondFavoritesData}
                        priceIcon={secondSvg}
                        accentColor="black"
                        template={template}
                    />
                </div>
                <div className="price__item">
                    <PriceCard 
                        priceTitle="Enterprise Plan"
                        priceMonth="Custom"
                        favoritesData={thirdFavoritesData}
                        priceIcon={thirdSvg}
                        accentColor="white"
                    />
                </div>
                

            </div>
        </div>
    )
}

export default Price;