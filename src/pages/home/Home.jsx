import React from 'react'
import "./home.css"
import CommonButton from '../../components/CommonButton'
import Banner from '../../components/home/Banner'


const Home = () => {
  return (
    <>
      <section className='banner_img_part'>
        <div className="container">
        <Banner/>

        </div>
      </section>
      {/* ========== brouse section ---------- */}
      <section>
        <div className="container">
          {/* ======= tittle part start  */}
          <div className='text-center'>
            <h6 className='font-poppin font-bold text-[#333333] text-[32px] mt-[56px]'>Browse The Range</h6>
            <p className='font-poppin text-[#666666] font-normal text-[20px] mb-[48px] mt-[5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* =========== banner image part start here man */}
          <div className='flex justify-between '>
            <div>
              <img src="dinner.png" alt="dinner_iamge" />
              <p className='text-center mt-[20px] font-poppin text-[24px] font-semibold text-[#333333]'>Dining</p>
            </div>
            <div>
              <img src="living.png" alt="dinner_iamge" />
              <p className='text-center mt-[20px] font-poppin text-[24px] font-semibold text-[#333333]'>Living</p>
            </div>
            <div>
              <img src="bedroom.png" alt="dinner_iamge" />
              <p className='text-center mt-[20px] font-poppin text-[24px] font-semibold text-[#333333]'>Bedroom</p>
            </div>

          </div>
        </div>
      </section>


      {/* =============== our product part start =================== */}
      <section className='my-[56px]'>
        <div className="container">
          <div>
            <h2 className='font-poppin text-[#3A3A3A] font-bold text-[40px] text-center mb-[32px]'>Our Products</h2>

           <div className='my-[32px] '>
            <div className='mb-[32px]'>
                    <div className='flex justify-between'>
              <div>
              <div className='relative' >
                <img  src="productOne.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#E97171] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
              <div>
              <div className='relative' >
                <img  src="hs.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#E97171] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
            <div>
              <div className='relative' >
                <img  src="lol.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#E97171] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
            <div>
              <div className='relative' >
                <img  src="re.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#2EC1AC] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>

            </div>

            </div>
            <div className='mb-[32px]'>
                    <div className='flex justify-between'>
              <div>
              <div className='relative' >
                <img  src="gr.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#E97171] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
              <div>
              <div className='relative' >
                <img  src="mu.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#2EC1AC] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
            <div>
              <div className='relative' >
                <img  src="lite.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#E97171] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>
            <div>
              <div className='relative' >
                <img  src="pote.png" alt="product_image" />
                
                  <span className='font-poppin w-[48px] h-[48px] flex justify-center items-center font-medium text-[16px] text-[#FFFFFF] bg-[#2EC1AC] rounded-[50%] absolute top-3.5 right-[20px]'>-30%</span>
                
              </div>
              <div>
                <h5 className='font-semibold font-poppin text-[#3A3A3A] text-[24px] mt-4'>Syltherine</h5>
                <p className='font-poppin font-medium text-[20px] text-[#898989] my-2'>Stylish cafe chair</p>
                <div className='flex gap-4'>
                  <p className='font-poppin font-semibold text-[20px] text-[#3A3A3A]'>Rp 2.500.000</p>
                  <span className='font-poppin text[16px] text-[#B0B0B0] font-normal line-through'>Rp 3.500.000</span>
                </div>
              </div>
            </div>

            </div>

            </div>
            {/*  */}
      
           </div>
          </div>
          <div>
            <button className='font-semibold font-poppin text-[16px] text-[#B88E2F] py-3 px-[75px] border-[2px] border-solid border-[#B88E2F]'>Show More</button>
          </div>
        </div>
      </section>
      {/* =============== our product part end =================== */}
    </>
  )
}

export default Home
