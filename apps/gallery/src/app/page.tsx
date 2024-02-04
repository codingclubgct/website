"use client"

import cover from "@/assests/img.png";
import { Avatar, AvatarGroup, Button, Container } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Header from "@/components/header"
import { team } from "@/lib/team"
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/darkmode";
import { CatppuccinContext } from "@/context/catppuccin";
import { events } from "@/lib/events"
import Link from "next/link";
import { InstagramEmbed } from 'react-social-media-embed';

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
    {/* <Header /> */}
    <div className="">
      <Container className="flex gap-2 p-4 h-[850px]">
        <div className="w-1/4 h-full flex flex-col gap-2">
          <div className="w-full h-[300px] bg-crust rounded-xl justify-between p-4 flex flex-col">
            <p className="text-3xl"> Operations and HR Team </p>
            <p className="text-subtext0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, explicabo!</p>
            <AvatarGroup>
              {team.map((item, i) => <Avatar src={item.photo} key={i} />)}
            </AvatarGroup>
            <a href="https://codingclubgct.in/join">
              <Button className="text-mauve"> Join Now </Button>
            </a>
          </div>
          <div className="w-full h-[calc(100%-300px-1rem)] bg-mantle rounded-xl justify-between p-4 flex flex-col">
            <p className="text-3xl">Coding Club GCT</p>
            <p className="text-lg">Not a <span className="text-yellow"> Rocket</span> Science</p>
            <p className="text-subtext0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officiis debitis saepe, voluptatem ea nemo consequatur nisi enim veritatis, corrupti maiores deleniti eaque voluptate fugiat, tempore tenetur culpa! Numquam, laudantium!</p>
            <div className="flex flex-col gap-1">
              {quickLinkItems.map((item, i) => <a href={item.href} key={i} className="text-blue no-underline">{item.label}</a>)}
            </div>
          </div>
        </div>
        <div className="w-[calc(75%-328px-2rem)] flex flex-col gap-2 h-full ">
          <div className="w-full flex gap-2 h-[100px]">
            <div className="w-2/3 rounded-xl bg-mantle flex items-center p-4 h-full">
              <img className="w-full object-contain" src={darkMode ? "/arrow_dark.png" : "arrow_light.png"} alt="" />
            </div>
            <div className="w-1/3 rounded-xl p-4 bg-crust h-full flex items-center">
              <p className="text-lg"> No Coding Required 😱 </p>
            </div>
          </div>
          <div className="w-full h-[calc(100%-100px-1rem)] rounded-xl">
            <div className="flex gap-2 h-[300px] items-center">
              <div className="w-1/2 flex flex-col justify-between items-center h-[calc(100%-0.5rem)] mb-2 bg-mantle rounded-xl p-4">
                <img className="h-4/5 object-contain" src={darkMode ? "/dark.png" : "/light.png"} alt="" />
                <p className="text-subtext0 text-lg text-center"> Lorem ipsum dolor sit amet. </p>
              </div>
              <div className="w-1/2 bg-crust rounded-tl-xl rounded-tr-xl h-full">
              </div>
            </div>
            <div className="bg-crust rounded-xl rounded-tr-none h-[calc(100%-300px)] p-4">
              <img src="/team-work.jpg" className="w-full h-full rounded-xl" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[calc(328px+2rem)] flex flex-col h-full justify-evenly">
          <div className="w-full h-[calc(100%-100px-1rem)] flex flex-col gap-4 bg-mantle p-4 rounded-xl">
            <p className="text-3xl"> Follow us on Instagram </p>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt" />
          </div>
          <div className="flex flex-col gap-2 h-[100px] w-full p-4 bg-crust rounded-xl">
            <div className="flex justify-between items-center">
              {socialMediaItems.map((item, i) => <a className="text-subtext0 no-underline" href={item.href} key={i}><FontAwesomeIcon icon={item.icon} className=" w-6 h-6" /></a>)}
            </div>
            <p> For staff enquiries contact us <a className="text-blue no-underline" href="https://codingclubgct.in/contact"> here </a> </p>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <div>
        <div className="flex flex-col gap-4 my-12">
          <p className="text-3xl">Meet Our Team</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, pariatur.</p>
        </div>
        <div className="flex ">
          <div className="w-1/2 flex flex-col gap-4">
            {team.map((item, i) => <div onClick={() => setCurrent(item)} key={i} className="flex  bg-mantle p-8 rounded-xl ">
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
          {events.map((item, i) => <div key={i} className="w-full h-full">
            <img src={item.photo} className="w-full object-contain"></img>
            <Link href={item.slug}><Button>See Photos</Button></Link>
          </div>)}
        </div>
      </Container>
    </div>
  </div>
}
