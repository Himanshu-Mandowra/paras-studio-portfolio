"use client"

import Slider from "react-slick"

type CarouselProps = {
  children: React.ReactNode
  slidesToShow?: number
}

export default function Carousel({ children, slidesToShow = 3 }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Arrows aksar layout bigadte hain agar custom na hon
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <div className="slick-custom-style">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}