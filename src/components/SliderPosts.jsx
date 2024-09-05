import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { fetchData } from '../utils/api';

import 'swiper/css';
import 'swiper/css/navigation';

const SliderPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const response = await fetchData();
      setData(response);
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className='w-full mx-4 lg:mx-0 md:mx-0 mb-10'>
      <Swiper
        className='container flex flex-col w-9/12 mt-14 pb-10'
        modules={[Navigation]}
        navigation={true} 
        slidesPerView={1} 
        spaceBetween={40} 
      >
        {data.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="w-full flex justify-center lg:mt-0 md:mt-0 mt-8 ">
              <div className="sm:w-full lg:w-2/3 md:w-2/3 border border-richblack-25 flex flex-col items-center justify-between p-8 hover:border-black transition-all duration-200 ease-in">
                <div className='flex flex-col border-b border-b-richblack-50 mb-4'>
                  <p className="text-2xl font-bold mb-5">{project.heading}</p>
                  <p className="text-lg mb-14">{project.preview}</p>
                </div>
                <div className='flex justify-start items-center gap-4 w-full mt-auto'>
                  <img src={project.author_pic} alt='Author' className="w-16 h-16 rounded-full border" />
                  <p className="text-lg font-semibold">{project.author}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default SliderPosts;
