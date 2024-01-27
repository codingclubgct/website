"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome, faBlog, faPeopleGroup, faPhone, faUserPlus, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin, faWhatsapp, faTelegram, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import logo from "@/assets/codingclublogo.png"
import { Divider } from '@mui/material';
import dark from "@/assets/dark.png"
import light from "@/assets/light.png"
import { DarkModeContext } from "@/context/darkmode"
import { useContext } from 'react';

const footerItems = {
    title: 'Quick links', items: [
        { label: 'Home', href: '/', icon: faHome },
        { label: 'Activities', href: '/activities', icon: faPersonChalkboard },
        { label: 'Teams', href: '/about', icon: faPeopleGroup },
        { label: 'Blogs', href: 'https://blogs.codingclubgct.in', icon: faBlog },
        { label: 'Contact', href: '/contact', icon: faPhone },
        { label: 'Join Us', href: '/join', icon: faUserPlus }
    ]
}

const footerElements = {
    title: 'Social Media', items: [
        { label: 'Instagram', href: 'https://www.instagram.com/codingclub.gct', icon: faInstagram },
        { label: 'YouTube', href: 'https://www.youtube.com/channel/UCeq-w-ypo1_hoyT9OuIjB6g', icon: faYoutube },
        { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919655775678', icon: faWhatsapp },
        { label: 'Telegram', href: 'https://t.me/+ztnWAjnsY9FiZjk1', icon: faTelegram },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/coding-club-gct/', icon: faLinkedin },
        { label: 'Discord', href: 'https://discord.gg/fMqUwkjQqB', icon: faDiscord }
    ]
}

export default function Footer() {
    const { darkMode } = useContext(DarkModeContext)
    return <div className=' bg-mantle w-full '>
        <Divider />
        <div className='flex flex-col md:flex-row justify-between p-4 text-sm gap-4'>
            <div className='my-4 flex flex-col gap-2 md:items-center md:w-1/5'>
                <div className='flex flex-col gap-2'>
                    <p className='text-yellow'>Coding Club GCT</p>
                    <p> Not a <span className='text-yellow'> Rocket </span> Science </p>
                </div>
                <img src={darkMode ? dark.src : light.src} className="w-20 h-20"></img>
            </div>
            <div className=' flex md:justify-center md:w-1/5'>
                <div>
                    <p className='my-4 font-bold'> {footerItems.title}</p>
                    <div className='flex flex-col gap-2'>

                        {footerItems.items.map(({ label, href, icon }, j) => <div key={j} className='flex justify-between w-28 mr-10 text-sm text-subtext0 ' >
                            <Link href={href} className=' flex justify-between text-sm text-subtext0 no-underline w-28'>
                                <span>{label}</span>
                                <FontAwesomeIcon icon={icon} className='w-4 text-subtext0 '></FontAwesomeIcon>
                            </Link>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className='flex md:justify-center md:w-1/5 '>
                <div>
                    <p className='my-4  font-bold'>Domains</p>
                    <div className='flex flex-col gap-2 text-sm text-subtext0'>
                        <p>Fullstack Developement</p>
                        <p>App Developement</p>
                        <p>Ai Engineering</p>
                        <p>Software Developement</p>
                        <p>Network Engineering</p>
                    </div>
                </div>
            </div>

            <div className='flex md:justify-center  md:w-1/5 '>
                <div className='flex flex-col'>
                    <p className='my-4 font-bold'>Community</p>
                    <div className='flex justify-between w-28 mr-10 text-sm text-subtext0'>
                        <Link href='https://github.com/coding-club-gct' className=' flex justify-between text-subtext0 no-underline md:ml-2 w-28'>
                            <span>Github</span>
                            <FontAwesomeIcon icon={faGithub} className='w-4 '></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>

            <div className=' flex md:justify-center md:w-1/5'>
                <div className='flex flex-col'>
                    <p className='my-4 font-bold'> {footerElements.title}</p>
                    <div className='flex text-sm text-subtext0'>
                        {footerElements.items.map(({ label, href, icon }, j) => <div key={j} className=' flex justify-center' >
                            <Link href={href} className='text-subtext0 no-underline p-1 '>{<FontAwesomeIcon icon={icon} className='w-4 text-subtext0'></FontAwesomeIcon>}</Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <p className='text-center text-sm p-4'>Made with ❤️ by <a href='https://github.com/Pavi143' target='_blank' className='text-blue no-underline'>Pavithra </a>
            (Executive member, Gen II)
        </p>
    </div >



}