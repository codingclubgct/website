import logo from '@/assests/codingclublogo.png'
import { Button } from '@mui/material'
export default  function Header(){
    return <div className='flex gap-16 w-full bg-white p-4'>
      <div className='flex w-2/5 '>
       <img src={logo.src} alt="try later" className='w-24' ></img>  
       <p className='text-4xl m-4'>CODING CLUB OF GCT</p>
      </div>
      <div className='flex  justify-between  p-4  w-3/5'>
        <p className='text-2xl'>Home</p> 
        <p className='text-2xl'>About</p>
        <p className='text-2xl'>Department</p>
        <p className='text-2xl'>Contact us</p>
      </div>

    </div>
  
}