import { useState } from 'react'
import Logo from "/logo.svg"
import Img from "/image-web-3-desktop.jpg"
import im from "/image-gaming-growth.jpg"
import im1 from "/image-retro-pcs.jpg"
import im2 from "/image-top-laptops.jpg"
import menu from "/icon-menu.svg"
import close from "/icon-menu-close.svg"

function App() {
  const [count, setCount] = useState(false)
  const toggle = ()=>{
    setCount(!count)
  }

  return (
    <div className='flex flex-col' >
      <div className='flex flex-row items-center justify-between lg:w-[70%] w-[85%] overflow-hidden mx-auto py-10' >
        <img src={Logo} alt="" />
        <img src={count?close:menu} alt="" onClick={toggle} className='lg:hidden size-5 ' />
        <ul className='lg:flex hidden flex-row gap-7 text-d_gray tracking-widest' >
          <li className='hover:text-sot_red cursor-pointer' >Home</li>
          <li className='hover:text-sot_red cursor-pointer' >New</li>
          <li className='hover:text-sot_red cursor-pointer' >Popular</li>
          <li className='hover:text-sot_red cursor-pointer' >Trending</li>
          <li className='hover:text-sot_red cursor-pointer' >Categories</li>
        </ul>
      </div>
      <div className={count?'lg:hidden flex w-[70%] items-center h-screen right-0 top-[100px] fixed bg-white p-0 px-8 mx-auto ':'hidden'} >
        <ul className='flex flex-col gap-7 text-d_gray -mt-[150px] tracking-widest font-semibold' >
          <li className='hover:text-sot_red cursor-pointer' >Home</li>
          <li className='hover:text-sot_red cursor-pointer' >New</li>
          <li className='hover:text-sot_red cursor-pointer' >Popular</li>
          <li className='hover:text-sot_red cursor-pointer' >Trending</li>
          <li className='hover:text-sot_red cursor-pointer' >Categories</li>
        </ul>
      </div>
      <div className='flex lg:flex-row flex-col gap-4 lg:w-[70%] w-[85%] mx-auto' >
        <div className='flex flex-col lg:w-4/6 w-full gap-10' >
          <div className='w-full h-[300px]'>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='flex items-center gap-4 lg:flex-row flex-col' >
            <span className='lg:w-1/2 w-full lg:text-6xl text-6xl lg:tracking-widest font-extrabold title' >
              The bright<br/>future of<br/>web 3.0?
            </span>
            <div className='lg:w-1/2 w-full flex gap-8 flex-col' >
              <span className='text-d_gray' >
                We dive into the next evolution of the web that<br/>
                claims to put the power of the platforms back <br/>
                into the hands of the people. But its really <br/>
                fullfillin its promises?
              </span>
              <button className='uppercase text-white hover:bg-black bg-sot_red p-3 w-fit px-14' >
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-2/6 w-full gap-4 text-white bg-black p-6 py-8' >
          <span className='text-4xl text-soft_orange font-bold' >New</span>
          <div className='flex flex-col gap-2 border-b-[1px] pb-5 border-b-d_gray' >
            <span className='text-2xl font-semibold hover:text-soft_orange cursor-pointer mt-5' >Hydrogen VS Electric Cars</span>
            <span className='text-g_blue tracking-widest' >
              Will Hydrogen fueled-cars ever catch up<br/>to EVs?
            </span>
          </div>

          <div className='flex flex-col gap-2 border-b-[1px] pb-5 border-b-d_gray' >
            <span className='text-2xl font-semibold hover:text-soft_orange cursor-pointer' >The downside of AI Artistry</span>
            <span className='text-g_blue tracking-widest' >
              What are the possible adverse effects of<br/>on-demand AI image generation?
            </span>
          </div>

          <div className='flex flex-col gap-2 pb-5' >
            <span className='text-2xl font-semibold hover:text-soft_orange cursor-pointer' >Is VC Funding Drying Up?</span>
            <span className='text-g_blue tracking-widest' >
              Private funding by VC firms is down 50%<br/>YOY. We take a look at what that means
            </span>
          </div>
        </div>
      </div>
      <div className='flex lg:w-[72%] w-[85%] mt-5 mx-auto lg:flex-row flex-col gap-5' >
        <div className='lg:w-1/3 w-full flex flex-row p-4 gap-3 h-[170px]' >
          <img src={im1} alt="" className='w-2/5 lg:h-full h-[100%]  object-cover object-bottom ' />
          <div className='flex flex-col gap-2 w-4/5 ' >
            <span className='text-g_blue lg:text-5xl text-3xl font-bold' >01</span>
            <span className='font-bold hover:text-sot_red' >
              Retrieving Retro PCs
            </span>
            <span className='text-gray-500' >
              What happens when old PCs<br/>
              are given modern upgrades?
            </span>
          </div>
        </div>
        <div className='lg:w-1/3 w-full flex flex-row p-4 gap-3 h-[170px]' >
          <img src={im2} alt="" className='w-2/5 lg:h-full h-[100%]  object-cover object-bottom ' />
          <div className='flex flex-col gap-2 w-4/5 ' >
            <span className='text-g_blue lg:text-5xl text-3xl font-bold' >02</span>
            <span className='font-bold hover:text-sot_red' >
              Top 10 Laptops of 2022
            </span>
            <span className='text-gray-500' >
              Our best picks for various<br/>
              needs and budgets.
            </span>
          </div>
        </div>
        <div className='lg:w-1/3 w-full flex flex-row p-4 gap-3 h-[170px]' >
          <img src={im} alt="" className='w-2/5  lg:h-full h-[100%] object-cover object-bottom ' />
          <div className='flex flex-col gap-2 w-4/5 ' >
            <span className='text-g_blue lg:text-5xl text-3xl font-bold' >03</span>
            <span className='font-bold hover:text-sot_red' >
              The Growth o gaming
            </span>
            <span className='text-gray-500' >
              How the pandemic has sparked<br/>
              fresh opportunities.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
