import './layout.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = ({children}) => {

    return(
        <main>
            <Header />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default MainLayout;