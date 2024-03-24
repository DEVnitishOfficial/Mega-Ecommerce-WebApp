import LinkImage from '../assets/images/Link.png'
import { GiShoppingCart } from "react-icons/gi";
import { CgSearch } from "react-icons/cg";
const Header = () => {
  return (
    <div className=''>
      <div className='h-24 w-full bg-[#EBEEF6] p-4'>
        <div className='flex items-center justify-between'>
          {/* logo and title */}
          <div>
            <img className=' flex  rounded-md' src={LinkImage} alt="" />
          </div>

          {/* page options */}
          <div>
            <ul className='flex space-x-10 font-bold text-sm cursor-pointer'>
               <li>HOMES</li>
               <li>PAGES</li>
               <li>PRODUCT</li>
               <li>CONTACT</li>
            </ul>
          </div>
          {/* login register and cart info */}
          <div className=' flex justify-center items-center font-bold text-sm space-x-7'>
            <div>
            <span>LOGIN</span> / <span>REGISTER</span>
            </div>
            <div className='flex justify-center items-center  '>
            <GiShoppingCart className='h-14 w-11' />
            <input
            value={6}
            className='rounded-2xl w-5 bg-green-600 absolute ml-10 mb-8 text-center text-white '
             type="text" />
            </div>
            


          </div>
        </div>
      </div>

{/* second heder */}
      <div className='h-16 w-full bg-[#1ABA1A] flex justify-between items-center '>
        <div className='font-bold flex py-20 ml-10 '>
          <select
              className="rounded-l-2xl border w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         
          >
            <option value="All Categories">All Categories</option>
            <option value="Laptops">Laptops</option>
            <option value="PC & Computers">PC & Computers</option>
            <option value="Cell Phones">Cell Phones</option>
            <option value="Tablets">Tablets</option>
            <option value="Gaming and VR ">Gaming and VR</option>
            <option value="Networking">Networking</option>
            <option value="Cameras">Cameras</option>
            <option value="Sounds">Sounds</option>
            <option value="Office">Office</option>
            <option value="Storage,USB">Storage,USB</option>
            <option value="Accessories">Accessories</option>
          </select>
          <input
          className='rounded-r-2xl text-sm outline-none '
          placeholder='search anything'
          type="text" />
          <CgSearch className='absolute transform translate-x-[300px] mt-1 ml-2' />
        </div>

        <div className='uppercase flex space-x-20  text-sm text-white mr-28'>
         <h3>free shipping over $199</h3>
         <h3>30 days money back</h3>
         <h3>100% secure payment</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
