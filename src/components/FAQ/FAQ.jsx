import Popup from '../Accordeon/Accordeon';
import Title from '../Title/Title'
import './style.scss'

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            title: 'What is SmartNotes?',
            desc: 'SmartNotes is a simple and powerful note-taking platform designed to help you organize your thoughts, ideas, and important information. With a clean interface and smart features, managing your notes has never been easier.'
        },
        {
            id: 2,
            title: 'How do I get started with SmartNotes?',
            desc: 'Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.'
        },
        {
            id: 3,
            title: 'What are the key features of SmartNotes?',
            desc: 'SmartNotes offers a free trial so you can explore the platform before choosing a plan. After the trial, you can select a subscription that best fits your needs and unlock additional features.'
        },
        {
            id: 4,
            title: 'How much does SmartNotes cost?',
            desc: 'SmartNotes offers a free trial so you can explore the platform before choosing a plan. After the trial, you can select a subscription that best fits your needs and unlock additional features.'
        },
        {
            id: 5,
            title: 'Who is SmartNotes for?',
            desc: 'SmartNotes is perfect for students, professionals, creators, and anyone who wants a simple way to organize their thoughts and information. Whether youre taking quick notes or managing large amounts of information, SmartNotes can fit your workflow.'
        },
        {
            id: 6,
            title: 'What is SmartNotes?',
            desc: 'SmartNotes is an all-in-one workspace for creating, organizing, and managing notes. It combines a simple design with powerful tools to help you stay productive and keep all your important information in one place.'
        },
    ]

    return(
        <div className='asked'>
            <Title
                className="asked__title"
                desc="We've compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team." 
            >
                Frequently Asked <span>Questions</span>
            </Title>

            <div className='asked__faq'>
                {faqData.map((item) => {
                    return <Popup 
                        data={item}
                    />
                })} 
            </div>
        </div>
    )
}

export default FAQ;