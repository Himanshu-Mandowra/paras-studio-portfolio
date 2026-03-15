import Link from "next/link"
import CameraIcon from "./CameraIcon"

export default function Footer(){

  return(

    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <div className="brand">
            <CameraIcon/>
            <h3>Paras Studio</h3>
          </div>

          <p>
            Professional photography services for weddings,
            portraits and special moments.
          </p>

        </div>


        <div>

          <h4>Links</h4>

          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

        </div>


        <div>

          <h4>Contact</h4>

          <p>Delhi, India</p>
          <p>+91 XXXXX XXXXX</p>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 Studio Lens. All rights reserved.
      </div>

    </footer>

  )

}