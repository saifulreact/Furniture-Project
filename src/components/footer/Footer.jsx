import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t-2 border-[#D9D9D9] '>
        <div className="container">
            <div className='flex py-12 '> 
              <div className='pr-[116px]'>
                <div>
                <img src="/footer.png" alt="footer_logo" />
              </div>
              <p className='text-[#9F9F9F] font-normal font-poppin text-[16px] w-[285px] pt-[50px]'>400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
              </div>
                <div className='pr-[144px]'>
                  <p className='font-poppin font-medium text-[16px] text-[#9F9F9F] pb-[55px]'>Links</p>
                  <ul className='text-[#000] font-poppin text-[16px] font-medium flex gap-[46px] flex-col'>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">Shop</Link></li>
                    <li> <Link to="/">About</Link></li>
                    <li> <Link to="/">Contact</Link></li>
                    
                  </ul>
                  </div>  
                <div className='pr-[72px]'>
                  <p className='font-poppin font-medium text-[16px] text-[#9F9F9F] pb-[55px]'>Help</p>
                  <ul className='text-[#000] font-poppin text-[16px] font-medium flex gap-[46px] flex-col'>
                    <li> <Link to="/">Payment Options</Link></li>
                    <li> <Link to="/">Returns</Link></li>
                    <li> <Link to="/">Privacy Policies</Link></li>
                    
                    
                  </ul>
                  </div>  
                <div>
                  <p className='font-poppin font-medium text-[16px] text-[#9F9F9F] pb-[55px]'>Newsletter</p>

                   <div className='flex gap-3'>
                     <input type="email" placeholder='Enter Your Email Address' className='border-b-[1px] outline-0' />
                    <button className='border-b-[1px] font-poppin font-medium text-[14px] '>SUBSCRIBE</button>
                   </div>
                  </div>  
                
            </div>

            
          <p className='font-poppin font-normal text-[#000000] border-t-2 border-[#D9D9D9] mb-[38px] pt-[35px] text-[16px]'>2023 furino. All rights reverved</p>  
        </div>
      
    </footer>
  )
}

export default Footer
