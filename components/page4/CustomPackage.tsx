import Link from "next/link"

export default function CustomPackage(){

  return(

    <div className="custom-package">

      <h3>Need a Custom Package?</h3>

      <p>
        Every event is unique. If our standard packages don&apos;t fit your needs,
        we’d love to create a custom solution just for you.
      </p>

      <Link href="/contact" className="custom-btn">
        Contact Us for Custom Quote
      </Link>

    </div>

  )

}