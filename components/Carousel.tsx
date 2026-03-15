"use client"

import { useEffect, useState } from "react"
import Slider from "react-slick"

type CarouselProps = {
  children: React.ReactNode
  slidesToShow?: number
  slidesToScroll?: number
}

export default function Carousel({ children, slidesToScroll=3, slidesToShow = 3 }: CarouselProps) {
  const [currentSlides, setCurrentSlides] = useState(slidesToShow)
  const [currentScroll, setCurrentScroll] = useState(slidesToShow)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: currentSlides,
    slidesToScroll: currentScroll,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: currentSlides,
          slidesToScroll: currentScroll
        }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: currentSlides,
          slidesToScroll: currentScroll
        }
      }
    ]
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentSlides(1)
        setCurrentScroll(1)
        console.log('📱 Mobile: 1 slide')
      } else if (window.innerWidth < 1024) {
        setCurrentSlides(2)
        setCurrentScroll(2)
        console.log('💻 Tablet: 2 slides')
      } else {
        setCurrentSlides(slidesToShow)
        setCurrentScroll(slidesToScroll)
        console.log('🖥️ Desktop: ', slidesToShow, ' slides')
      }
    }
    
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [slidesToShow])

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
      
    </div>
  )
}
