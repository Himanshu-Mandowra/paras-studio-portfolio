import Link from "next/link";
import CameraIcon from "./CameraIcon";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <div className="logo">
          <CameraIcon />
          <h3>Paras Studio</h3>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/packages">Packages</Link>
          </li>
          <li>
            <Link href="/book">Book Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
