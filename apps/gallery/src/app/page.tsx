"use client"

import DarkModeSwitcher from "@/components/darkmodeswitcher";
import logo from "@/assests/codingclublogo.png";
import cover from "@/assests/img.png";
import { Avatar, AvatarGroup, Button, Container, Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin, faWhatsapp, faTelegram, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Footer from "@/components/footer"
import Header from "@/components/header"
import clg from "@/assests/college.webp"
import poster from "@/assests/poster.jpeg"
import poster2 from "@/assests/poster2.jpeg"
import cartoon from "@/assests/cartoon.jpg"
import clubsea from "@/assests/clubsea.jpg"
import lang from "@/assests/lang.jpg"
import bg from "@/assests/bg.jpg"
import { team } from "@/lib/team"
import dark from "@/assests/dark.png"
import light from "@/assests/light.png"
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/darkmode";
import ccdark from "@/assests/codingclub/dark.png"
import cclight from "@/assests/codingclub/light.png"
import { CatppuccinContext } from "@/context/catppuccin";
import {events} from "@/lib/events"
import Link from "next/link";
const items = [
  {
    title: 'Title 1', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 2', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  }

]
const socialMediaItems = [
  { icon: faDiscord, href: "" },
  { icon: faInstagram, href: "" },
  { icon: faYoutube, href: "" },
  { icon: faWhatsapp, href: "" },
  { icon: faLinkedin, href: "" },
  { icon: faEnvelope, href: "" }
]
const quickLinkItems = [
  { label: 'Home Page', href: "https://codingclubgct.in" },
  { label: 'Blogs', href: "https://blogs.codingclubgct.in" },
  { label: 'Join us', href: "https://codingclubgct.in/join" },
  { label: 'GitHub', href: "https://github.com/coding-club-gct" },
]


export default function Home() {
  const { darkMode } = useContext(DarkModeContext)
  const [current, setCurrent] = useState(team[0])
  const catppuccinColors = useContext(CatppuccinContext)
  return <div>
    <Header />
    <div className="bg-mantle flex min-h-[600px] gap-4 p-4">
      <div className="w-1/3 flex flex-col gap-4 h-full">
        <div className="w-full  bg-crust rounded-lg gap-4 p-4 flex flex-col">
          <p className="text-3xl ">Operations and HR Team </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, explicabo!</p>
          <AvatarGroup>
            {team.map((item, i) => <Avatar src={item.photo} key={i} className="w-20 h-20" />)}
          </AvatarGroup>
        </div>
        <div className="w-full h-[500px] bg-crust rounded-lg gap-4 p-4">
          <div className="flex gap-4 p-4">
            <img src={clubsea.src} alt="try later" className="w-full  rounded-full"></img>
          </div>
          <div className="flex gap-4 p-4">
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, aspernatur."
            </p>
          </div>
        </div>
        <div className="w-full h-[400px] bg-crust rounded-lg">

        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-4 h-full ">
        <div className="w-full h-[500px] bg-crust rounded-lg">
          <img src={darkMode ? dark.src : light.src} className="w-full object-contain"></img>
        </div>
        <div className="w-full  bg-crust rounded-lg flex flex-col p-4">
          <p className="text-3xl">Coding Club GCT</p>
          <p className="text-lg">Not a <span className="text-yellow"> Rocket</span> Science</p>
          <p className="text-subtext0 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officiis debitis saepe, voluptatem ea nemo consequatur nisi enim veritatis, corrupti maiores deleniti eaque voluptate fugiat, tempore tenetur culpa! Numquam, laudantium!</p>
          <img src={darkMode ? ccdark.src : cclight.src} className="w-1/2 object-contain mx-auto"></img>
          <div className="flex flex-col gap-4 ">
            {quickLinkItems.map((item, i) => <a href={item.href} key={i} className="text-blue no-underline">{item.label}</a>)}
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col  h-full gap-4">
        <div className="w-full h-[400px] bg-crust rounded-lg">
          <img src={poster.src} alt="try later" className="w-1/2 h-1/2 object-cover"></img>
          <img src={poster2.src} alt="try later" className="w-1/2 h-1/2 object-cover"></img>
          <div className="flex h-1/2 ">
            <div className="h-full w-1/2 ">
              <p className="text-xl gap-4 p-4">Participants</p>
              <p className="text-3xl p-4 gap-4">230</p>
            </div>
            <div className="h-full w-1/2  ">
              <p className="text-xl gap-4 p-4 ">Participants</p>
              <p className="text-3xl gap-4 p-4">230</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly items-center w-full h-[100px] bg-crust rounded-lg">
          {socialMediaItems.map((item, i) => <a className="text-subtext0 no-underline" href={item.href} key={i}><FontAwesomeIcon icon={item.icon} className=" w-6 h-6" /></a>)}
        </div>
        <div className="w-full h-[700px] bg-crust rounded-lg">
          {/* <img src={cartoon.src} alt="try later" className="w-full h-full"></img> */}
        </div>
      </div>
    </div>
    <Container>
      <div>
        <div className="flex flex-col gap-4 my-12">
          <p className="text-3xl">Meet Our Team</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, pariatur.</p>
        </div>
        <div className="flex ">
          <div className="w-1/2 flex flex-col gap-4">
            {team.map((item, i) => <div onClick={() => setCurrent(item)} key={i} className="flex  bg-mantle p-8 rounded-lg ">
              <div className="w-2/3 flex flex-col gap-8">
                <p className="text-lg">{item.name}</p>
                <p className="text-lg">{item.roll}</p>
                <p className="text-lg text-red">{item.designation}</p>
              </div>
              <div className="w-1/3 h-full flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} style={{ color: current.roll === item.roll ? catppuccinColors.mauve : catppuccinColors.text }} className="w-24 h-24"></FontAwesomeIcon>
              </div>
            </div>)}
          </div>
          <div className="w-1/2">
            <img src={current.photo} className="w-full object-contain"></img>
          </div>
        </div>
      </div>
    </Container>
    <div className="bg-mantle my-12">
      <Container>
        <div className="flex flex-col gap-4 py-12">
          <p className="text-3xl">Our Events</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, pariatur.</p>
        </div>
        <div className=" grid grid-cols-2 gap-4">
            {events.map((item,i)=><div key={i} className="w-full h-full">
              <img src={item.photo} className="w-full object-contain"></img>
              <Link href={item.slug}><Button>See Photos</Button></Link>
            </div>)}
        </div>
      </Container>
    </div>
  </div>
}
