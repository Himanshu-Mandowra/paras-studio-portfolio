import CustomPackage from "@/components/page4/CustomPackage";
import PackageCards from "@/components/page4/PackageCard";


export default function PackagesPage(){

  return(

    <section className="packages-page">

      <div className="container">

        <div className="packages-header">

          <h1>Photography Packages</h1>

          <p>
            Choose the perfect package for your needs
          </p>

        </div>

        <PackageCards/>

        <CustomPackage/>

      </div>

    </section>

  )

}