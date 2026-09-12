import './style.scss';

import { useState } from 'react';

import arrowUp from '../../assets/icons/main/get_arow_green.svg';
import arrowRight from '../../assets/icons/main/right_arow_green.svg';

const Accordeon = (props) => {
    const {
        data,
    } = props

    const [isOpen, setIsOpen] = useState()
    const toggleIsOpen = () => setIsOpen(prev => !prev)

    return(
        <>
            <article key={data.id} className={`accordeon ${isOpen ? '' : 'accordeon__open'}`} onClick={toggleIsOpen}>
               <div className='accordeon__content'>
                   <h4 className='accordeon__title'>{data.title}</h4>
                   <p className='accordeon__desc'>{data.desc}</p>
               </div>
               <img src={isOpen ? arrowUp : arrowRight} alt="" />    
            </article>
        </>
        
    )
}

export default Accordeon;