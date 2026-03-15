import Link from "next/link"

const packages = [
  {
    title:"Wedding Photography",
    image:"/images/3.jpg",
    price:"₹75,000",
    description:"Complete wedding day coverage with premium editing",
    features:[
      "Pre-wedding consultation",
      "8–10 hours coverage",
      "2 photographers",
      "500+ edited photos",
      "Online gallery",
      "Premium album (40 pages)"
    ]
  },
  {
    title:"Portrait Photography",
    image:"/images/2.jpg",
    price:"₹15,000",
    description:"Professional portrait session for individuals or families",
    features:[
      "2 hour studio session",
      "Multiple outfit changes",
      "50+ edited photos",
      "Online gallery",
      "Print-ready files",
      "Makeup artist available"
    ]
  },
  {
    title:"Event Photography",
    image:"/images/4.jpg",
    price:"₹25,000",
    description:"Comprehensive coverage for corporate and social events",
    features:[
      "4 hours coverage",
      "Single photographer",
      "200+ edited photos",
      "Same-day highlights",
      "Online gallery",
      "Quick turnaround (7 days)"
    ]
  }
]

export default function PackageCards(){

  return(

    <div className="package-grid">

      {packages.map((pkg,index)=>(

        <div key={index} className="package-card">

          <img src={pkg.image} alt={pkg.title}/>

          <div className="package-content">

            <h3>{pkg.title}</h3>

            <h2>{pkg.price}</h2>

            <p>{pkg.description}</p>

            <ul>

              {pkg.features.map((f,i)=>(
                <li key={i}>✓ {f}</li>
              ))}

            </ul>

            <Link href="/book" className="package-btn">
              Book This Package →
            </Link>

          </div>

        </div>

      ))}

    </div>

  )

}