import './layout.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Intelligent from '../components/Intelligent/Intelligent'
import Runner from '../components/Runner/Runner'
import Quote from '../components/Quote/Quote'
import Discover from '../components/Discover/Discover'
import Video from '../components/Video/Video'
import Price from '../components/Price/Price'

const MainLayout = () => {

    return(
        <main>
            <Header />
            <div className='main'>
                <Intelligent />
                <Runner />
                <Quote 
                    quoteTitle="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever."
                    author="Sarah Johnson"
                    className="hero__quote"
                />
                <Discover />
                <Quote 
                    quoteTitle="When I was a child, I was taught that it is indecent to attract attention to yourself, and you should never expose yourself.… That's exactly what I've been doing all my life."
                    author="Audrey Hepburn"
                    className="discover__quote"
                />
                <Video />
                <Quote 
                    quoteTitle="We earned $300 in the bar tonight, do you still want to go to law school?"
                    author="The Coyote Ugly Bar"
                    className="price__quote"
                />
                <Price />
            </div>
            <Footer />
        </main>
    )
}

export default MainLayout;