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
          <div>
            <h6>Browse The Range</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
