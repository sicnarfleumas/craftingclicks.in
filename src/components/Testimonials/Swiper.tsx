// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <p className='description'>Adept social media management, and transparent communication, resulting in a substantial and sustained improvement in our digital performance.”</p>
            <p className='name'>Mr. Samuel Francis</p>
            <p className='service'>Services: Website design / development</p>
            <a className="link" href="/">View Project</a>
        </SwiperSlide>

        <SwiperSlide>
            <p className='description'>Adept social media management, and transparent communication, resulting in a substantial and sustained improvement in our digital performance.”</p>
            <p className='name'>Mr. Samuel Francis</p>
            <p className='service'>Services: Website design / development</p>
            <a className="link" href="/">View Project</a>
        </SwiperSlide>

        <SwiperSlide>
            <p className='description'>Adept social media management, and transparent communication, resulting in a substantial and sustained improvement in our digital performance.”</p>
            <p className='name'>Mr. Samuel Francis</p>
            <p className='service'>Services: Website design / development</p>
            <a className="link" href="/">View Project</a>
        </SwiperSlide>

        {/* <SwiperSlide>
            <p className='name'>{props.accname}</p>
            <p className='service'>{props.service}</p>
            <a className="link" href={props.projectLink}>View Project</a>
        </SwiperSlide> */}

      </Swiper>
    </>
  );
}
