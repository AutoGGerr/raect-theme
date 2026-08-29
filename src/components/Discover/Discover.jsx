import './style.scss'

import Title from '../Title/Title';

import flagIcon from '../../assets/icons/card-icon/flag.svg'
import branchIcon from '../../assets/icons/card-icon/git_branch.svg'
import globalIcon from '../../assets/icons/card-icon/global.svg'
import hashtagIcon from '../../assets/icons/card-icon/hashtag.svg'
import likeIcon from '../../assets/icons/card-icon/like.svg'
import roundIcon from '../../assets/icons/card-icon/round.svg'


const Discover = () => {
    const discoverCardData = [
        {icon: likeIcon, title: "Cross-Platform Accessibility", desc: "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat."},
        {icon: globalIcon, title: "Customizable Templates", desc: "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences."},
        {icon: flagIcon, title: "Secure Cloud Storage", desc: "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data."},
        {icon: roundIcon, title: "Real-Time Collaboration", desc: "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects."},
        {icon: hashtagIcon, title: "AI-Powered Organization", desc: "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it."},
        {icon: branchIcon, title: "Integrations", desc: "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration."}
    ]

    return(
        <div className='discover'>
            <Title
                className="discover__title"
                desc="SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others, and stay organized." 
            >
                Discover the Power of <span>SmartNotes</span>
            </Title>
            
            <div className="discover__cards">
                {discoverCardData.map((item, index) => {
                    return <article className='discover__cards-item' key={index}>
                        <img src={item.icon} alt="icon" className='discover__cards-icon'/>
                        <div>
                            <h3 className='discover__cards-title'>{item.title}</h3>
                            <p className='discover__cards-desc'>{item.desc}</p>
                        </div>
                    </article>
                })}
            </div>
        </div>
    )
}

export default Discover;