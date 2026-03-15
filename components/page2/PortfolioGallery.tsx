"use client"
import { useState } from "react"

const images = [
  {src:"/images/2.jpg",category:"wedding"},
  {src:"/images/3.jpg",category:"wedding"},
  {src:"/images/4.jpg",category:"portrait"},
  {src:"/images/5.jpg",category:"portrait"},
  {src:"/images/2.jpg",category:"event"},
  {src:"/images/3.jpg",category:"event"},
]

export default function PortfolioGallery(){

  const [filter,setFilter] = useState("all")

  const filteredImages =
    filter === "all"
      ? images
      : images.filter(img => img.category === filter)

  return(

    <>

      <div className="portfolio-filters">

        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("wedding")}>Wedding</button>
        <button onClick={()=>setFilter("portrait")}>Portrait</button>
        <button onClick={()=>setFilter("event")}>Event</button>

      </div>

      <div className="portfolio-grid">

        {filteredImages.map((img,index)=>(
          <img key={index} src={img.src} alt="portfolio"/>
        ))}

      </div>

    </>

  )

}