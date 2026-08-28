import './style.scss'

import carousel_1 from '../../assets/icons/carousel/1_carousel_logo.svg'
import carousel_2 from '../../assets/icons/carousel/2_carousel_logo.svg'
import carousel_3 from '../../assets/icons/carousel/3_carousel_logo.svg'

const Carousel = () => {
    const carouselItems = [carousel_1, carousel_2, carousel_3, carousel_2, carousel_1, carousel_2, carousel_2, carousel_2, ]

    return(
        <div className="runner">
            <div className="runner__content">
                
                {carouselItems.map((item) => {
                    return <img src={item} alt="" />
                })}
                {carouselItems.map((item) => {
                    return <img src={item} alt="" />
                })}
            </div>
        </div>
    )
}

export default Carousel;