"use client"

import { IconDefinition, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "@mui/material"
import sdLight from "@/assets/logos/sd/light.png"
import sdDark from "@/assets/logos/sd/dark.png"
import hrLight from "@/assets/logos/hr/light.png"
import hrDark from "@/assets/logos/hr/dark.png"
import ogLight from "@/assets/logos/og/light.png"
import ogDark from "@/assets/logos/og/dark.png"
import { useContext } from "react"
import { DarkModeContext } from "@/context/darkmode"

type CardItem = { photo: string, name: string, designation: string, about: string, socials: { icon: IconDefinition, href: string }[], domains: string[], rollNo: string }


const aboutItems = [
    {
        photos: { light: sdLight, dark: sdDark },
        title: 'Software Developement', content: 'Fueled by innovation, dynamic applications tailored to user needs are specialized in by our team.Through continuous exploration and adaptability, it is ensured that our applications remain ahead of the curve in the rapidly changing digital landscape, providing users with cutting-edge and relevant experiences.'
    },
    {
        photos: { light: hrLight, dark: hrDark },
        title: 'Operations and HR', content: 'Competitions and hackathons are meticulously organized, emphasizing seamless execution and engaging experiences. Strategic planning ensures these events foster team collaboration and innovation. Our commitment to professional growth is reflected in these initiatives, contributing to our teams success and technological prowess.'
    },
    {
        photos: { light: ogLight, dark: ogDark },
        title: 'OG', content: 'Our alumni, advisors, and well-wishers form an integral part of our community. Alumni provide insights and mentorship,advisors contribute expertise and shaping initiatives with a wealth of experience,and well-wishers offer support. Together, they create a robust network,enriching our community with diverse experiences and fostering collaborative growth.'
    },

]

const cardItems: CardItem[] = [
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Devi R', designation: 'Club Advisor', about: 'Assistant Professor', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: [], rollNo: ''
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Adithya R', designation: 'President', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2017102'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Joel Samuel Raj A', designation: 'Secretary', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018119'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Jeremy Ashirwad P', designation: 'Treasurer', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018118'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Noufal Rahman', designation: 'Web Developement Lead', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2017313'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'Harithaa s', designation: 'Operations and HR lead', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faGithub, href: 'www.github.com' },
            { icon: faLinkedin, href: 'www.linkedIn.com' },
            { icon: faInstagram, href: 'www.instagram.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018116'
    }
]

function Card(props: CardItem) {
    return <div className="flex flex-col px-4 py-8 w-full justify-around items-center bg-mantle rounded h-[350px]">
        <img src={props.photo} className="w-20 object-contain rounded-full"></img>
        <p className="font-bold">{props.name}</p>
        <p className="text-yellow">{props.designation}</p>
        <p>{props.rollNo}</p>
        <p>{props.about}</p>
        <div className="flex gap-4 ">
            {props.domains.map((domain, i) => <span key={i} className="bg-crust rounded px-2 py-1 text-sm text-subtext0">{domain}</span>)}
        </div>
        <div className="flex gap-4">
            {props.socials.map((social, j) => <a href={social.href} key={j}><FontAwesomeIcon icon={social.icon} className="w-4 h-4 text-text"></FontAwesomeIcon>
            </a>)}
        </div>


    </div>
}

export default function Page() {
    const { darkMode } = useContext(DarkModeContext)
    return <div>
        <div className="bg-mantle py-4">
            <Container>
                <p className="text-4xl my-8">Teams under Coding Club GCT</p>
                <div className="flex flex-col md:flex-row gap-4 md:p-4 flex-wrap justify-between">
                    {aboutItems.map((item, i) => <div key={i} className="flex flex-col w-full md:w-[32%] items-center gap-4">
                        <img src={darkMode ? item.photos.dark.src : item.photos.light.src} className="w-24 oject-contain rounded-full" ></img>
                        <p className="font-bold">{item.title}</p>
                        <p className="">{item.content}</p>
                    </div>)}
                </div>
            </Container>
        </div>
        <div >
            <Container className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 my-12">
                    <p className="text-4xl font-medium" >Meet Our Board</p>
                    <p className="max-w-[500px] text-subtext0">Unlike other clubs in our college, our board members are elected from students in their 6th semester.</p>
                </div>
                <div className="md:grid grid-rows-2 grid-cols-3 w-full gap-4">
                    {cardItems.map((item, i) => <div key={i} className="w-full my-4 md:my-0 ">
                        <Card {...item} />
                    </div>)}
                </div>
            </Container>
        </div>
    </div >
}