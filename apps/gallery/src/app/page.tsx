import DarkModeSwitcher from "@/components/darkmodeswitcher";
import logo from "@/assests/codingclublogo.png";
import img from "@/assests/img.png";
import { Button, Container, Divider, Link } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin, faWhatsapp, faTelegram, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Footer from "@/components/footer"
import Header from "@/components/header"
import clg from "@/assests/college.webp"
const Items = [
  {
    title: 'Title 1', photo: img.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 2', photo: img.src, content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: img.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: img.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  }

]

export default function Home() {
  return <div>
    <Header /> 
    <div className="relative bg-black " >
      <img src={clg.src} alt="try later" className="w-full opacity-50"></img>
    
      <div className="absolute text-4xl mt-24 ml-24 mr-24 mb-1" style={{top: "16px" ,left: "16px", bottom:"16px",right:"16px"}}>
      <p className="text-4xl font-bold text-white ml-[40%] p-8">About us</p>
        <p className="flex align centre text-white text-2xl p-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
         perspiciatis quam. Dolor, necessitatibus. Sint, cumque numquam ipsam temporibus ex voluptate? Deleniti error fuga sint voluptatem 
         possimus, accusamus inventore dolorem, deserunt pariatur, accusantium ratione 
        excepturi perferendis adipisci nobis officiis magnam veritatis cupiditate dicta eligendi ad atque! Voluptatibus dolore aperiam libero quod impedit, labore iste sequi inventore necessitatibus recusandae! Necessitatibus, velit nobis? Sint suscipit quidem explicabo eius natus! Nemo sequi expedita pariatur tempora at unde sapiente dolorum dolorem minus, illo officia iusto dolore illum ut suscipit, molestias praesentium quas.
         Sapiente eaque sequi quasi libero iste explicabo, saepe quis. Rerum distinctio explicabo harum.</p>
      </div>
    </div>
    <div className="flex flex-col">
        <p className="text-4xl p-8 font-medium">RECENT EVENTS</p>
      <div className=" grid grid-rows-2 grid-cols-2 p-4 gap-4">
        {
          Items.map((item, i) => <div key={i} >
            <div className="relative flex flex-col gap-4 p-4 bg-mantle">
              <img src={item.photo} alt="img" className="w-full  object-contain hover:opacity-40" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0
        hover:opacity-100 transition-opacity duration-300">
                <a href="www.google.com">
                  <Button className="bg-orange-700 text-white rounded-full w-20 h-16 " variant="outlined">Click</Button>
                </a>
              </div>
            <p className="flex justify-center text-2xl text-text font-semibold p-4">{item.title}</p>
            <p className=" text-text font-semibold">{item.content}</p>
            </div>

          </div>
          )
        }
      </div>
      <div className="bg-mantle flex flex-col gap-2  mt-4">
        <p className="text-4xl font-medium mt-4 pl-8">THINGS TO BE NOTED</p>
        <div className=" grid grid-rows-1 grid-cols-3 gap-8 m-8">
          <div className=" bg-white flex flex-col p-4  h-50 gap-12 " >
            <div className="flex justify-center">
              <p className="text-2xl mt-4">No of events conducted</p>
            </div>
            <div className="flex justify-center items-center " >
              <p className="text-6xl mb-8">10+</p>
            </div>
          </div>
            <div className="bg-white flex flex-col p-4  h-50 gap-12 " >
            <div className="flex justify-center">
              <p className="text-2xl mt-4">No of Awards</p>
            </div>
            <div className="flex justify-center items-center " >
              <p className="text-6xl mb-8">20+</p>
            </div>
          </div>
            <div className="bg-white flex flex-col p-4   h-50 gap-12" >
            <div className="flex justify-center">
              <p className="text-2xl mt-4">No of Students</p>
            </div>
            <div className="flex justify-center items-center " >
              <p className="text-6xl mb-8">400+</p>
            </div>
            </div>
         
        </div>
      </div>
      <div className="flex flex-col p-4 gap-8">
        <div className="flex justify-center">
        <p className="text-4xl font-medium p-4" >WHAT THEY SAY</p>
        </div>
        <div className="flex flex-col bg-mantle gap-4 p-4 ">
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
          <div className="flex flex-col ml-8">
            <p>harry potter</p>
            <p>gucci</p>
            <p>actor</p>
          </div>
        </div>
        <div className="flex flex-col bg-mantle gap-2 p-2" >
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
          <div className="flex flex-col ml-8">
            <p>harry potter</p>
            <p>gucci</p>
            <p>actor</p>
          </div>
        </div>
        <div className="flex flex-col bg-mantle gap-4 p-2">
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
          <div className="flex flex-col ml-8">
            <p>harry potter</p>
            <p>gucci</p>
            <p>actor</p>
          </div>
        </div>
        <div className="flex justify-evenly p-4 w-full gap-8"  >
          <div className="flex w-2/3 bg-mantle">
            <p className="text-2xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sed.</p>
          </div>
          <div className="flex flex-col bg-mantle items-center w-1/3">
            <p className="text-xl p-4">Lorem ipsum, dolor</p>
            <div className="flex gap-4 mb-4 ">
              <Link href='www.google .com'>
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </Link>
              <Link href="www.google.com">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </Link>
              <Link href="www.google.com">
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </Link>
              <Link href="www.google.com">
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
              </Link>
              <Link href="www.google.com">
                <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
}
