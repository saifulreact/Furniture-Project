import React from 'react'
import "./bannner.css"
import CommonButton from '../../components/CommonButton'

const Banner = () => {
  return (
    <>
  <div className='w-[643px] pb-[116px] pt-[153px] ms-auto'>
            <div className='pt-[62px] pb-[37px] pl-[38px] pr-[57px]  bg-[#FFF3E3] rounded-[10px]'>
              <div>
                <h5 className='text-[#333333]  font-poppin font-semibold text-[16px] leading-[3px]'>New Arrival</h5>
                <h1 className='text-primary font-poppin font-bold text-[52px] w-[411px] mb-[17px] mt-[4px]'>Discover Our New Collection</h1>
                <p className='w-[546px] font-poppin text-[18px] text-[#333333] mb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <CommonButton buttontext={"BUY Now"}/>
              </div>

            </div>
            
          </div>
      
    </>
  )
}

export default Banner
