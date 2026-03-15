import PortfolioGallery from "@/components/page2/PortfolioGallery";

export default function Portfolio(){

  return(

    <section className="portfolio-page">

      <div className="container">

        <div className="portfolio-header">

          <h1>Portfolio</h1>

          <p>
            Explore our collection of captured moments
          </p>

        </div>

        <PortfolioGallery/>

      </div>

    </section>

  )

}