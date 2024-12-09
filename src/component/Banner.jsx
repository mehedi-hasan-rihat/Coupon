import React from 'react';
import Slide1 from '../assets/Img/banner_home1.jpeg'
import Slide3 from '../assets/Img/banner_home3.jpeg'
import Slide2 from '../assets/Img/banner_home2.jpeg'
import Slide4 from '../assets/Img/banner_home4.jpeg'
import Slide5 from '../assets/Img/banner_home5.jpeg'
import Slide6 from '../assets/Img/banner_home6.jpeg'

export default function Banner() {
  return (
    <div className="carousel container mx-auto flex my-5 sm:my-12 max-h-[500px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={Slide1}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide2" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src={Slide2}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide3" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src={Slide3}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide4" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img
        src={Slide4}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide5" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>

    <div id="slide5" className="carousel-item relative w-full">
      <img
        src={Slide5}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide6" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>

    <div id="slide6" className="carousel-item relative w-full">
      <img
        src={Slide6}
        className="w-full rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide5" className="btn btn-circle bg-[#99979783]">❮</a>
        <a href="#slide1" className="btn btn-circle bg-[#99979783]">❯</a>
      </div>
    </div>
  </div>
  );
}