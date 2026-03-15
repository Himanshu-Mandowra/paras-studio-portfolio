export default function FeaturedWork(){

  const photos = [
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/2.jpg",
  ]

  return(

    <section className="featured">

      <div className="container">

        <h2 className="section-title">
          Featured Work
        </h2>

        <div className="gallery">

          {photos.map((img,index)=>(
            <img key={index} src={img} alt="work"/>
          ))}

        </div>

      </div>

    </section>

  )
}