import pay1 from '../assets/images/paypal1.png'
import american_express from '../assets/images/amex-american-express.png'
import master_card from '../assets/images/master-card.png'
import payu from '../assets/images/payu.png'
import pine_labs from '../assets/images/pine-labs.png'
import visa from '../assets/images/visa.png'
import fb from '../assets/images/1.Fb.png'
import insta from '../assets/images/2.Insta.png'
import yt from '../assets/images/3.Youtube.png'
import linkedin from '../assets/images/5.Linkedin.png'
import whatsaap from '../assets/images/6.whatsapp.png'
import { VscSend } from "react-icons/vsc";




const Footer = () => {
  return (
    <div className="flex flex-col">
<div className="bg-black text-white flex justify-between items-start px-10 py-4 cursor-pointer">

<div className="flex-grow">
  <h6 className="inline-block text-xl font-semibold mb-2 hover:text-yellow-400 border-b border-yellow-400">TOP CATEGORIES</h6>
  <ul className="text-xl space-y-1  text-[#757472]">
    <li className="hover:text-white">Laptops</li>
    <li className="hover:text-white">PC & Computers</li>
    <li className="hover:text-white">Cell Phones</li>
    <li className="hover:text-white">Tablets</li>
    <li className="hover:text-white">Gaming and VR</li>
    <li className="hover:text-white">Networks</li>
    <li className="hover:text-white">Camera</li>
    <li className="hover:text-white">Sound</li>
    <li className="hover:text-white">Office</li>
  </ul>
</div>

<div className="flex-grow">
  <h6 className="inline-block text-xl font-semibold mb-2 hover:text-yellow-400 border-b border-yellow-400">COMPANY</h6>
  <ul className="text-xl space-y-1  text-[#757472]">
    <li className="hover:text-white">About swoo</li>
    <li className="hover:text-white">Contact</li>
    <li className="hover:text-white">Career</li>
    <li className="hover:text-white">Blogs</li>
    <li className="hover:text-white">Site map</li>
    <li className="hover:text-white">Store location</li>
  </ul>
</div>

<div className="flex-grow">
  <h6 className="inline-block text-xl font-semibold mb-2 hover:text-yellow-400 border-b border-yellow-400">HELP CENTER</h6>
  <ul className="text-xl space-y-1  text-[#757472]">
    <li className="hover:text-white">Customer Service</li>
    <li className="hover:text-white">Policy</li>
    <li className="hover:text-white">Term & Condition</li>
    <li className="hover:text-white">Track Order</li>
    <li className="hover:text-white">FAQs</li>
    <li className="hover:text-white">My Account</li>
    <li className="hover:text-white">Product</li>
  </ul>
</div>

<div className="flex-grow">
  <h6 className=" text-xl font-semibold mb-2 hover:text-yellow-400 inline-block border-b border-yellow-400">PARTNER</h6>
  <ul className="text-xl space-y-1  text-[#757472]">
    <li className="hover:text-white">Become Seller</li>
    <li className="hover:text-white">Partnership</li>
    <li className="hover:text-white">Affiliate</li>
    <li className="hover:text-white">Advertise</li>
  </ul>
</div>

<div>
  <div> 
<h6 className=" text-xl font-semibold mb-2 hover:text-yellow-400 inline-block border-b border-yellow-400">NEWSLETTER</h6>
<p className='text-sm max-w-[400px] text-[#757472] font-semibold'>Stay in touch with us, get product updates, offers, discounts directly to your inbox</p>
<input type="text" placeholder='please provide your email address here' className=" rounded-l-md px-8 py-2 text-sm focus:outline-none bg-[#4c4e52]" />

<VscSend className='absolute h-9 w-9  translate-x-[223px] translate-y-[-35px] bg-red-500 rounded-r-md'/>

<p className='text-sm mt-4 text-[#757472] font-semibold'>We&apos;ll never share your email address with a third party.</p>

  </div>

  <div>
  <h6 className=" text-xl font-semibold mb-2 hover:text-yellow-400 inline-block border-b border-yellow-400">FOLLOW US ON</h6>
  <div className='flex space-x-2 mt-2'>
    <a target='_blank' href="https://www.facebook.com/"><img src={fb} alt="" className="h-10 w-10" /></a>
    <a target='_blank' href="https://www.instagram.com/"> <img src={insta} alt="" className="h-10 w-10" /> </a>
    <a target='_blank' href="https://www.youtube.com/"><img src={yt} alt="" className="h-10 w-10" /></a>
    <a target='_blank' href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"><img src={linkedin} alt="" className="h-10 w-10" /></a>
    <a target='_blank' href="https://web.whatsapp.com/"><img src={whatsaap} alt="" className="h-10 w-10" /></a>
</div>
  </div>

  <div>
  <h6 className=" text-xl font-semibold mb-2 hover:text-yellow-400 inline-block border-b border-yellow-400 mt-5">FOR ONLINE ORDER</h6>
  <p className='text-xl text-[#757472]'>+91 6200387485</p>
  <p className='text-sm text-[#757472]'>[ Mon To Sun : 10:00 AM To 6:00 PM ]</p>

  </div>
</div>

</div>


<div className="bg-[#f5fffa] w-full h-16">
  
  <div className='flex justify-center items-center space-x-10 mt-6 max-h-3  '> 
    <img className='h-10 cursor-pointer' src={visa} alt="visa" />
    <img className='h-10 cursor-pointer' src={pay1} alt="paypal" />
    <img className='h-10 cursor-pointer' src={master_card} alt="master_card" />
    <img className='h-10 cursor-pointer' src={pine_labs} alt="pine_labs" />
    <img className='h-10 cursor-pointer' src={payu} alt="payu" />
    <img className='h-10 cursor-pointer ' src={american_express} alt="american_express" />
  </div>
  </div>      
    </div>
  )
}

export default Footer