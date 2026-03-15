import Link from "next/link"

export default function CTA(){

  return(

    <section className="cta">

      <div className="container">

        <h2>Ready to Capture Your Special Moments?</h2>

        <p>Book your photography session today.</p>

        <Link href="/book" className="btn btn-primary">
          Book Now
        </Link>

      </div>

    </section>

  )
}