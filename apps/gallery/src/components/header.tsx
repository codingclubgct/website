import logo from '@/assests/codingclublogo.png'
import { Button, Divider } from '@mui/material'
import DarkModeSwitcher from './darkmodeswitcher'

const navItems = [
  { label: "Home Page", href: "https://codingclubgct.in" },
  { label: "blogs", href: "https://blogs.codingclubgct.in" }
]


export default function Header() {
  return <div>
    <div className='flex items-center p-4'>

      <DarkModeSwitcher></DarkModeSwitcher>
      <div className='flex gap-4 w-full justify-end'>
        {navItems.map((navItem, i) => <div key={i}><a href={navItem.href} className='text-blue no-underline'>{navItem.label}</a></div>)}
      </div>
    </div>
    <Divider></Divider>
  </div>

}